import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about our company.",
};

export default function About() {
  return (
    <div className="container mt-5">
      <h1>About Us</h1>
    </div>
  );
}