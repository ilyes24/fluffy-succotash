import Link from "next/link";

export type CouponCardProps = {
    title: string;
    termsLink: string;
    code: string;
};

export const CouponCard: React.FC<CouponCardProps> = ({title, termsLink, code}: CouponCardProps) => {
    return (
        <div>
            <div className="flex flex-row justify-between px-3 py-2 border-2 rounded-xl w-[25rem] border-primary">
              <div className="flex-1">
                <p className="break-normal">
                  {title}
                </p>
                <Link href={termsLink}><p className="text-primary text-sm">Terms & Conditions</p></Link>
              </div>
              <div className="min-w-[7rem] cursor-pointer min-h-[4rem] bg-accent-light flex items-center justify-center flex-col">
                <p className="text-accent">Use Code</p>
                <p className="text-base">{code}</p>
              </div>
            </div>
          </div>
    );    
};