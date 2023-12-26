import React from "react";

// type sectionHeadingProps = {
//     headingName: React.ReactNode;
// };

export default function SectionHeading({ children }) {
  return (
    <section className="text-center">
      <h2 className="text-5xl capitalize mb-8 mt-24 text-center">{children}</h2>
    </section>
  );
}
