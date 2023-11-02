import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <div className="bg-primary flex flex-row justify-between items-center h-[22rem] px-20">
      <div className="flex flex-row gap-20">
        <div>
          <h3 className="text-white">Shop by Category</h3>
          <ul>
            <li key="Skincare">
              <Link className="text-accent-light" href="#">
                Skincare
              </Link>
            </li>
            <li key="Personal Care">
              <Link className="text-accent-light" href="#">
                Personal Care
              </Link>
            </li>
            <li key="Handbags">
              <Link className="text-accent-light" href="#">
                Handbags
              </Link>
            </li>
            <li key="Apparels">
              <Link className="text-accent-light" href="#">
                Apparels
              </Link>
            </li>
            <li key="Watches">
              <Link className="text-accent-light" href="#">
                Watches
              </Link>
            </li>
            <li key="Eye Wear">
              <Link className="text-accent-light" href="#">
                Eye Wear
              </Link>
            </li>
            <li key="Jewellery">
              <Link className="text-accent-light" href="#">
                Jewellery
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white">About</h3>
          <ul>
            <li key="Contact Us">
              <Link className="text-accent-light" href="#">
                Contact Us
              </Link>
            </li>
            <li key="About Us">
              <Link className="text-accent-light" href="#">
                About Us
              </Link>
            </li>
            <li key="Careers">
              <Link className="text-accent-light" href="#">
                Careers
              </Link>
            </li>
            <li key="Press">
              <Link className="text-accent-light" href="#">
                Press
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white">Policy</h3>
          <ul>
            <li key="Return Policy">
              <Link className="text-accent-light" href="#">
                Return Policy
              </Link>
            </li>
            <li key="Terms of Use">
              <Link className="text-accent-light" href="#">
                Terms of Use
              </Link>
            </li>
            <li key="Sitemap">
              <Link className="text-accent-light" href="#">
                Sitemap
              </Link>
            </li>
            <li key="Security">
              <Link className="text-accent-light" href="#">
                Security
              </Link>
            </li>
            <li key="Privacy">
              <Link className="text-accent-light" href="#">
                Privacy
              </Link>
            </li>
            <li key="EPR Compliance">
              <Link className="text-accent-light" href="#">
                EPR Compliance
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div></div>
    </div>
  );
};
