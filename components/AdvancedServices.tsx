"use client";

import React from "react";
import siteData from "@/data/site.json";
import { FaDna } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

// Exact Fertility Testing (twin swimming sperms)
function SpermIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="#e83e74"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ width: "34px", height: "34px" }}
    >
      <circle cx="44" cy="20" r="6.5" stroke="#e83e74" strokeWidth="2.5" />
      <path d="M38 23 C 30 28, 22 25, 14 36" />
      <circle cx="28" cy="38" r="5.5" stroke="#e83e74" strokeWidth="2.5" />
      <path d="M23 41 C 18 45, 12 43, 6 52" />
    </svg>
  );
}

// Exact Uterus / Reproductive preservation icon
function UterusIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="#059669"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ width: "34px", height: "34px" }}
    >
      <path d="M32 54 L32 36" />
      <path d="M24 32 C24 44, 40 44, 40 32 C40 23, 24 23, 24 32 Z" />
      <path d="M24 27 C17 19, 9 23, 13 34 C15 39, 20 37, 20 34" />
      <path d="M40 27 C47 19, 55 23, 51 34 C49 39, 44 37, 44 34" />
      <circle cx="17" cy="35" r="3" fill="#059669" stroke="none" />
      <circle cx="47" cy="35" r="3" fill="#059669" stroke="none" />
    </svg>
  );
}

// Female Avatar
function FemaleAvatar() {
  return (
    <div
      style={{
        width: "54px",
        height: "54px",
        borderRadius: "9999px",
        background: "linear-gradient(145deg, #e11d48 0%, #be123c 100%)",
        boxShadow: "0 6px 14px rgba(225,29,72,0.28)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <svg viewBox="0 0 40 40" fill="#ffffff" style={{ width: "30px", height: "30px" }}>
        <circle cx="20" cy="13" r="5" />
        <path
          d="M14 11 C13 17, 15 21, 15 23 M26 11 C27 17, 25 21, 25 23"
          stroke="#ffffff"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
        <path d="M20 20 c-5.5 0 -10 3 -11 8 c0 1 1 2 2.5 2 h17 c1.5 0 2.5 -1 2.5 -2 c-1 -5 -5.5 -8 -11 -8 z" />
      </svg>
    </div>
  );
}

// Male Avatar using FaUserLarge
function MaleAvatar() {
  return (
    <div
      style={{
        width: "54px",
        height: "54px",
        borderRadius: "9999px",
        background: "linear-gradient(145deg, #0284c7 0%, #0369a1 100%)",
        boxShadow: "0 6px 14px rgba(2,132,199,0.28)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <FaUserLarge style={{ width: "24px", height: "24px", color: "#ffffff" }} />
    </div>
  );
}

export default function AdvancedServices() {
  const { eyebrow, topCards, womenConditions, menConditions } =
    siteData.advancedServices;

  return (
    <section
      style={{
        backgroundColor: "#fcfdfe",
        paddingTop: "50px",
        paddingBottom: "76px",
      }}
      className="px-3 sm:px-4 lg:pr-8 lg:pl-3 xl:pl-4"
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto", width: "100%" }}>
        {/* Header Label: ADVANCED SERVICES */}
        <Reveal>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
            <span
              style={{
                fontSize: "13px",
                fontWeight: 800,
                letterSpacing: "0.14em",
                color: "#e11d48",
                textTransform: "uppercase",
              }}
            >
              {eyebrow}
            </span>
            <span
              style={{
                width: "44px",
                height: "2.5px",
                backgroundColor: "#e11d48",
                borderRadius: "9999px",
              }}
            />
          </div>
        </Reveal>

        {/* Top 3 Cards Grid */}
        <Stagger className="mb-6 grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6" stagger={0.1}>
          {/* Card 1: Fertility Testing */}
          <StaggerItem variant="scaleIn">
          <div
            style={{
              background: "linear-gradient(135deg, #fff5f8 0%, #ffffff 55%, #fff0f5 100%)",
              border: "1.5px solid #fecdd3",
              borderRadius: "24px",
              padding: "20px 22px",
              display: "flex",
              alignItems: "center",
              gap: "16px",
              boxShadow: "0 4px 16px rgba(225,29,72,0.05)",
            }}
          >
            <div
              style={{
                width: "58px",
                height: "58px",
                borderRadius: "9999px",
                backgroundColor: "#ffe4e6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <SpermIcon />
            </div>
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "19px",
                  fontWeight: 700,
                  color: "#0f2038",
                  margin: 0,
                  lineHeight: 1.25,
                }}
              >
                {topCards[0].title}
              </h3>
              <p
                style={{
                  fontSize: "13px",
                  lineHeight: 1.5,
                  color: "#64748b",
                  margin: "6px 0 0 0",
                }}
              >
                {topCards[0].description}
              </p>
            </div>
          </div>
          </StaggerItem>

          {/* Card 2: Genetic Testing */}
          <StaggerItem variant="scaleIn">
          <div
            style={{
              background: "linear-gradient(135deg, #f0f9ff 0%, #ffffff 55%, #e0f2fe 100%)",
              border: "1.5px solid #bae6fd",
              borderRadius: "24px",
              padding: "20px 22px",
              display: "flex",
              alignItems: "center",
              gap: "16px",
              boxShadow: "0 4px 16px rgba(2,132,199,0.05)",
            }}
          >
            <div
              style={{
                width: "58px",
                height: "58px",
                borderRadius: "9999px",
                backgroundColor: "#e0f2fe",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <FaDna style={{ width: "26px", height: "26px", color: "#0284c7" }} />
            </div>
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "19px",
                  fontWeight: 700,
                  color: "#0f2038",
                  margin: 0,
                  lineHeight: 1.25,
                }}
              >
                {topCards[1].title}
              </h3>
              <p
                style={{
                  fontSize: "13px",
                  lineHeight: 1.5,
                  color: "#64748b",
                  margin: "6px 0 0 0",
                }}
              >
                {topCards[1].description}
              </p>
            </div>
          </div>
          </StaggerItem>

          {/* Card 3: Fertility Preservation */}
          <StaggerItem variant="scaleIn">
          <div
            style={{
              background: "linear-gradient(135deg, #f0fdf4 0%, #ffffff 55%, #dcfce7 100%)",
              border: "1.5px solid #bbf7d0",
              borderRadius: "24px",
              padding: "20px 22px",
              display: "flex",
              alignItems: "center",
              gap: "16px",
              boxShadow: "0 4px 16px rgba(5,150,105,0.05)",
            }}
          >
            <div
              style={{
                width: "58px",
                height: "58px",
                borderRadius: "9999px",
                backgroundColor: "#dcfce7",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <UterusIcon />
            </div>
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "19px",
                  fontWeight: 700,
                  color: "#0f2038",
                  margin: 0,
                  lineHeight: 1.25,
                }}
              >
                {topCards[2].title}
              </h3>
              <p
                style={{
                  fontSize: "13px",
                  lineHeight: 1.5,
                  color: "#64748b",
                  margin: "6px 0 0 0",
                }}
              >
                Diverse options to preserve fertility{" "}
                <span style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}>
                  for future dreams
                </span>{" "}
                under life&apos;s uncertainties.
              </p>
            </div>
          </div>
          </StaggerItem>
        </Stagger>

        {/* Bottom 2 Large Condition Cards (Side by side on desktop) */}
        <Stagger className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6" stagger={0.12}>
          {/* Women Card */}
          <StaggerItem variant="slideLeft">
          <div
            style={{
              background: "linear-gradient(135deg, #fff5f8 0%, #ffffff 40%, #ffeef3 100%)",
              border: "1.5px solid #fecdd3",
              borderRadius: "26px",
              padding: "26px 30px",
              boxShadow: "0 6px 20px rgba(225,29,72,0.05)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
              <FemaleAvatar />
              <h3
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#0f2038",
                  margin: 0,
                  letterSpacing: "-0.01em",
                }}
              >
                {womenConditions.title}
              </h3>
            </div>

            {/* Pill Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {womenConditions.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1.5px solid #fecdd3",
                    color: "#1e293b",
                    padding: "8px 18px",
                    borderRadius: "9999px",
                    fontSize: "13.5px",
                    fontWeight: 600,
                    boxShadow: "0 2px 6px rgba(225,29,72,0.05)",
                    display: "inline-block",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          </StaggerItem>

          {/* Men Card */}
          <StaggerItem variant="slideRight">
          <div
            style={{
              background: "linear-gradient(135deg, #f0f9ff 0%, #ffffff 40%, #e0f2fe 100%)",
              border: "1.5px solid #bae6fd",
              borderRadius: "26px",
              padding: "26px 30px",
              boxShadow: "0 6px 20px rgba(2,132,199,0.05)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
              <MaleAvatar />
              <h3
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#0f2038",
                  margin: 0,
                  letterSpacing: "-0.01em",
                }}
              >
                {menConditions.title}
              </h3>
            </div>

            {/* Pill Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {menConditions.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1.5px solid #bae6fd",
                    color: "#1e293b",
                    padding: "8px 18px",
                    borderRadius: "9999px",
                    fontSize: "13.5px",
                    fontWeight: 600,
                    boxShadow: "0 2px 6px rgba(2,132,199,0.05)",
                    display: "inline-block",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
