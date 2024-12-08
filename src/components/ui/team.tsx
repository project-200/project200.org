"use client";

import React from "react";
import Image from "next/image";
import teamData from "@/data/team.json";

const TeamSection = () => {
  return (
    <section className="wave-top wave-bottom">
      {/* Content Section */}
      <div
        className="py-16 md:py-24 bg-coolGray-900"
        style={{
          backgroundImage: "url('/flex-ui-assets/elements/pattern-dark2.svg')",
          backgroundPosition: "center",
        }}
      >
        <div className="container px-4 mx-auto">
          {/* Departments */}
          {teamData.departments.map((department, departmentIndex) => (
            <div key={departmentIndex} className="mb-12">
              <h4 className="text-2xl font-bold text-white mb-8">{department.name}</h4>
              <div className="flex flex-wrap -mx-4">
                {department.members.map((member, memberIndex) => (
                  <div
                    key={memberIndex}
                    className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-12"
                  >
                    <div className="max-w-[250px] mx-auto font-default">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={150}
                        height={150}
                        className="block mb-6 rounded-full object-cover"
                      />
                      <h3 className="mb-2 text-xl md:text-xl leading-tight font-semibold">
                        {member.name}
                      </h3>
                      <span className="text-sm md:text-base font-medium text-gray-700">
                        {member.role}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
