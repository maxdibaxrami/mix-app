import { useLaunchParams } from "@telegram-apps/sdk-react";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const lp = useLaunchParams();
  

  const getPaddingForPlatform = () => {
    if (['ios'].includes(lp.platform)) {
      return '40px';
    } else {
      return '20px';
    }
  };
  
  return (
    <section style={{paddingTop:`${getPaddingForPlatform()}`}} className="flex items-start flex-col gap-4 py-8">
      <div className="inline-block w-full max-w-lg text-center">
          {children}
      </div>
    </section>
  );
}
