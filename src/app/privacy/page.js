import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className={"flex flex-col gap-4 font-light text-neutral-500"}>
      <div>
        <h1 className={"text-lg font-medium"}>
          Privacy Policy for giggity.co.za:
        </h1>
        <p>
          At giggity.co.za, we understand the importance of protecting your
          privacy and we are committed to safeguarding your personal
          information. This privacy policy sets out how we collect, use, and
          protect your personal information when you use our website and
          services.
        </p>
      </div>

      <div>
        <h2 className={"text-md font-medium"}>Information we collect:</h2>
        <p>
          Currently, we do not collect any personal information from our users
          as there is no user sign up or subscriptions. However, our website is
          hosted on Vercel, a third-party hosting platform, which may collect
          certain technical information about your use of the website, such as
          your IP address, browser type, and operating system. This information
          is collected for the purpose of maintaining and improving the
          website's performance and security.
        </p>
      </div>

      <div>
        <h2 className={"text-md font-medium"}>Use of information:</h2>
        <p>
          We use the technical information collected by Vercel to monitor and
          improve the performance and security of our website. We do not use
          this information to identify individual users or to track their
          activities on the website.
        </p>
      </div>

      <div>
        <h2 className={"text-md font-medium"}>Disclosure of information:</h2>
        <p>
          We do not share any personal information with third parties, except as
          required by law or to protect our legal rights. We may disclose
          technical information collected by Vercel to third-party service
          providers for the purpose of maintaining and improving the website's
          performance and security.
        </p>
      </div>

      <div>
        <h2 className={"text-md font-medium"}>Data retention:</h2>
        <p>
          We retain the technical information collected by Vercel for as long as
          necessary to fulfill the purposes for which it was collected, or as
          required by law.
        </p>
      </div>

      <div>
        <h2 className={"text-md font-medium"}>Security:</h2>
        <p>
          We take reasonable measures to protect the technical information
          collected by Vercel from unauthorized access, use, and disclosure.
          However, no method of transmission over the internet or electronic
          storage is 100% secure, and we cannot guarantee the security of your
          information.
        </p>
      </div>

      <div>
        <h2 className={"text-md font-medium"}>
          Changes to this privacy policy:
        </h2>
        <p>
          We reserve the right to update this privacy policy at any time by
          posting a new version on our website. You should check this page
          periodically to ensure that you are aware of any changes.
        </p>
      </div>
    </div>
  );
}
