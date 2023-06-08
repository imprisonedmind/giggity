import FooterContent from "@/components/footer/footerContent";

export default function Footer() {
  const version = process.env.APP_VERSION;

  return (
    <footer className={"hidden px-4 pb-4 md:flex"}>
      <FooterContent version={version} />
    </footer>
  );
}
