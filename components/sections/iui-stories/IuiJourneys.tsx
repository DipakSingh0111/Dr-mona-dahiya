"use client";

import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import {
  TreatmentSection,
  TreatmentSectionHeader,
  NumberedCard,
} from "@/components/ui/treatment";

const stories = [
  {
    number: "1",
    title: "1st Cycle IUI Success",
    description:
      "A couple visited our office unhappy. They had been trying for over 2 years taking test after test each month. All they saw was a negative pregnancy test. Dr. Mona had them do mild follicular monitoring with meds plus insemination. The insemination cycle was timed perfectly and Aditi conceived her healthy baby boy on the first attempt!",
  },
  {
    number: "2",
    title: "Overcoming Mild Male Infertility",
    description:
      "Male factor infertility can consist of low sperm counts and/or lack of movement. Shalini and Vivek had both which kept them from getting pregnant. Dr. Mona performed advanced sperm washing and concentration to pick out sperm with the highest percentage of motility. Once Shalini's IUI cycle was complete, she conceived their healthy baby girl!",
  },
  {
    number: "3",
    title: "Bypassing Cervical Mucus",
    description:
      "Ruchi and Manav had testing that appeared to be normal, but Dr. Mona discovered that they had hostile cervical mucus. It was so hostile that it was blocking the sperm from entering their uterus. Dr. Dahiya performed them an IUI which allowed them to bypass the cervical mucus. Because the IUI placed washed sperm directly into the uterus, Ruchi was able to conceive during the first procedure and delivered their healthy baby girl at full-term!",
  },
  {
    number: "4",
    title: "Unexplained Infertility",
    description:
      "These young lovers had no clinical reason that they should not get pregnant. They tried for 18 months with no luck on their own. Lucky for them they consulted with Dr. Mona Dahiya. Dr. Dahiya had them start on mild oral medications to help them ovulate with an IUI done to help give them the best chance possible each month. The couple conceived during their second month of trying with IUI and delivered their healthy baby boy.",
  },
  {
    number: "5",
    title: "IUI After Hormone Balancing",
    description:
      "She recently overcame a thyroid issue that stopped her from ovulating. Swati booked an appointment with Dr. Mona to learn more on how to get pregnant. Dr. Dahiya monitored Swati's hormones and ultrasound tracked her ovaries to help determine when the best time for insemination would be. Swati soon found out she was pregnant and delivered her healthy baby girl with no complications!",
  },
  {
    number: "6",
    title: "Conceived on 2nd Attempt",
    description:
      "Nidhi really wanted to try focusing on her natural cycle. Sometimes life happens and Nidhi and her husband got caught up with both of their careers. When they finally took a vacation they weren't sure if they would be able to have sex that month because they were unsure if she'd even be fertile that cycle. Nidhi spoke to Dr. Mona Dahiya about her minimal approach with tracking her ovaries along with the least invasive form of assisted reproduction, IUI. With Mona's help, Nidhi got pregnant within 2 months and delivered her healthy baby boy.",
  },
  {
    number: "7",
    title: "Affordable IUI vs IVF",
    description:
      "IVF was strongly recommended to this couple as their best—and maybe only—option. The entire process of going through IVF intimidated them because of the physical and financial stresses that they would both have to endure. They went ahead and booked an appointment with Dr. Mona Dahiya as a second opinion. Dr. Dahiya ran Garima some basic tests to make sure all their reproductive numbers were where they should be. They were tested and turned out to be perfect IUI candidates! The Bansal family got pregnant using IUI alone and welcomed their princess into this world.",
  },
  {
    number: "8",
    title: "Conception After Pelvic Infection",
    description:
      "Tanvi had her tubes treated for a pelvic infection, but still was unable to conceive. She was under the impression that she might have permanently damaged herself. Dr. Mona conducted a full work up making sure her tubes weren't scarred from her previous infection. An HSC was done to ensure her tubes were healthy and allowing eggs to flow through them (tubal patency). Dr. Mona then gave Tanvi a monitored IUI cycle. She conceived quickly and delivered her healthy baby boy without any complications.",
  },
  {
    number: "9",
    title: "Success in 3rd Attempt",
    description:
      "Radhika and Varun were very pessimistic after 2 failed IUIs at a clinic near their home. They decided to come to Arya just to give Dr. Mona Dahiya a visit. Poor timing can be the reason some couples don't get pregnant. They told Dr. Dahiya that their other doctors actually told them that their IUIs failed because their timing was off by 1/2 a day. With personalized monitoring and sperm washing, their 3rd IUI would be the charm. And it was! They welcomed their little girl into the world!",
  },
  {
    number: "10",
    title: "Gentle Stimulation, Healthy Boy",
    description:
      "Mansi and Ankit tried for months to get pregnant on their own before even consulting with a doctor. After taking costly fertility tests and still seeing negative pregnancy tests it really took a toll on Mansi. As soon as she met Dr. Dahiya, all she wanted was for there to be a simple step by step plan in order to get pregnant. Dr. Dahiya had Mansi take a low dose stimulation medication cycle with 1 IUI. This not only made the process less stressful for Mansi, but she stayed pregnant with minimal complications and delivered her healthy baby boy at 39 weeks.",
  },
];

export default function IuiJourneys() {
  return (
    <TreatmentSection>
      <TreatmentSectionHeader
        eyebrow="IUI Success Stories"
        title="Patient Success Stories"
      />

      <Stagger
        delay={0.05}
        className="mt-7 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
      >
        {stories.map((item) => (
          <StaggerItem key={item.number} className="h-full">
            <NumberedCard {...item} />
          </StaggerItem>
        ))}
      </Stagger>
    </TreatmentSection>
  );
}
