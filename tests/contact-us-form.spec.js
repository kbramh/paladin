import { expect, test } from "@playwright/test";

const CONTACT_PAGE = "/pages/contactUs.html";

async function fillContactForm(page, { email, info, name, phoneNumber }) {
  await page.getByLabel("Your name").fill(name);
  await page.getByLabel("Your email").fill(email);
  if (phoneNumber !== undefined) {
    await page.getByLabel("Your phone number").fill(phoneNumber);
  }
  await page.getByLabel("how can we help you?").fill(info);
}

async function mockContactApi(page) {
  let capturedRequest = null;

  await page.route("**/api/contact", async (route) => {
    if (route.request().method() !== "POST") {
      await route.continue();
      return;
    }

    capturedRequest = route.request().postDataJSON();
    await route.fulfill({
      body: JSON.stringify({
        message: `Thank you for your submission, ${capturedRequest.name}!`,
        success: true,
      }),
      contentType: "application/json",
      status: 200,
    });
  });

  return {
    getCapturedRequest: () => capturedRequest,
  };
}

test.describe("ContactUsForm", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(CONTACT_PAGE);
  });

  test("submits the contact form with the correct information", async ({ page }) => {
    const { getCapturedRequest } = await mockContactApi(page);

    await fillContactForm(page, {
      email: "jane.doe@example.com",
      info: "I need help reporting a suspicious transaction.",
      name: "Jane Doe",
    });

    await page.getByRole("button", { name: "SEND MESSAGE" }).click();

    await expect.poll(getCapturedRequest).toEqual({
      email: "jane.doe@example.com",
      info: "I need help reporting a suspicious transaction.",
      name: "Jane Doe",
      phoneNumber: "",
    });

    await expect(page.getByLabel("Your name")).toHaveValue("");
    await expect(page.getByLabel("Your email")).toHaveValue("");
    await expect(page.getByLabel("how can we help you?")).toHaveValue("");
  });

  test("submits the contact form with a phone number", async ({ page }) => {
    const { getCapturedRequest } = await mockContactApi(page);

    await fillContactForm(page, {
      email: "john.smith@example.com",
      info: "Please call me back about a potential fraud case.",
      name: "John Smith",
      phoneNumber: "5551234567",
    });

    await page.getByRole("button", { name: "SEND MESSAGE" }).click();

    await expect.poll(getCapturedRequest).toEqual({
      email: "john.smith@example.com",
      info: "Please call me back about a potential fraud case.",
      name: "John Smith",
      phoneNumber: "5551234567",
    });

    await expect(page.getByLabel("Your phone number")).toHaveValue("");
  });

  test("shows validation when required fields are missing", async ({ page }) => {
    await page.getByRole("button", { name: "SEND MESSAGE" }).click();

    await expect(page.getByLabel("Your name")).toHaveAttribute("aria-invalid", "true");
    await expect(page.getByLabel("Your email")).toHaveAttribute("aria-invalid", "true");
    await expect(page.getByLabel("how can we help you?")).toHaveAttribute("aria-invalid", "true");
    await expect(page.getByLabel("Your phone number")).not.toHaveAttribute("aria-invalid", "true");
  });

  test("shows validation when email is invalid", async ({ page }) => {
    await fillContactForm(page, {
      email: "not-an-email",
      info: "I still need help.",
      name: "Alex Rivera",
    });

    await page.getByRole("button", { name: "SEND MESSAGE" }).click();

    await expect(page.getByLabel("Your name")).not.toHaveAttribute("aria-invalid", "true");
    await expect(page.getByLabel("Your email")).toHaveAttribute("aria-invalid", "true");
    await expect(page.getByLabel("how can we help you?")).not.toHaveAttribute("aria-invalid", "true");
  });

  test("shows validation when phone number contains non-numeric characters", async ({ page }) => {
    await fillContactForm(page, {
      email: "alex@example.com",
      info: "Please reach out.",
      name: "Alex Rivera",
      phoneNumber: "555-123-4567",
    });

    await page.getByRole("button", { name: "SEND MESSAGE" }).click();

    await expect(page.getByLabel("Your phone number")).toHaveAttribute("aria-invalid", "true");
  });
});
