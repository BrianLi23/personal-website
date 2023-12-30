"use client";
import { timelineData } from "@/lib/data";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Timeline() {
  return (
    <section className="m-16 scroll-mt-48" id="timeline">
      <VerticalTimeline lineColor="#f3f4f6" animate={false}>
        {timelineData.map((data, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0.05)",
                padding: "1rem 3rem",
                textAlign: "left",
                animation: "false",
                gap: "1rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid rgba(51,65,85)",
              }}
              date={data.date}
              icon={data.icon}
              iconStyle={{
                background: "rgb(51,65,85)",
                color: "white",
                visibility: "visible",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{data.title}</h3>
              <h4 className="font-normal !mt-0">{data.location}</h4>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {data.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
