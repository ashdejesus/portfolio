"use client";

import React from "react";

export default function Contact() {
  return (
    <div className="bento-card p-4 col-span-1 md:col-span-6 space-y-4 group">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* A member of */}
        <div className="flex flex-col justify-between space-y-1.5">
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            <p className="text-xs text-foreground/70 font-medium">A member of</p>
          </div>
          <div className="space-y-1 flex flex-col h-full">
            <a target="_blank" rel="noopener noreferrer" className="block p-2.5 rounded-lg border border-foreground/10 hover:bg-foreground/5 transition-all duration-200 hover:-translate-y-0.5 group flex-1" href="https://www.aap.ph">
              <div className="flex items-start justify-between gap-1 h-full">
                <p className="text-[10px] font-medium leading-tight text-foreground group-hover:text-foreground transition-colors">Analytics &amp; Artificial Intelligence Association of the Philippines (AAP)</p>
                <svg className="w-2.5 h-2.5 text-foreground/50 transition-transform group-hover:translate-x-0.5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </div>
            </a>
            <a target="_blank" rel="noopener noreferrer" className="block p-2.5 rounded-lg border border-foreground/10 hover:bg-foreground/5 transition-all duration-200 hover:-translate-y-0.5 group flex-1" href="https://www.psia.org.ph">
              <div className="flex items-start justify-between gap-1 h-full">
                <p className="text-[10px] font-medium leading-tight text-foreground group-hover:text-foreground transition-colors">Philippine Software Industry Association</p>
                <svg className="w-2.5 h-2.5 text-foreground/50 transition-transform group-hover:translate-x-0.5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
            </svg>
            <p className="text-xs text-foreground/70 font-medium">Social Links</p>
          </div>
          <div className="grid grid-cols-1 gap-1">
            {/* LinkedIn removed — no LinkedIn account */}
            <a target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-1.5 rounded-lg border border-foreground/10 hover:bg-foreground/5 transition-all duration-200 hover:-translate-y-0.5 group" aria-label="Visit GitHub profile" title="Visit GitHub profile" href="https://github.com/ashdejesus">
              <div className="text-foreground group-hover:text-foreground transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                </svg>
              </div>
              <p className="text-[10px] font-medium text-foreground group-hover:text-foreground transition-colors">GitHub</p>
            </a>
            <a target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-1.5 rounded-lg border border-foreground/10 hover:bg-foreground/5 transition-all duration-200 hover:-translate-y-0.5 group" aria-label="Visit X profile" title="Visit X profile" href="https://x.com/yoboyikoy">
              <div className="text-foreground group-hover:text-foreground transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22.162 5.656c-.63.28-1.308.466-2.022.55.727-.436 1.285-1.128 1.55-1.954-.68.403-1.434.696-2.234.854A3.49 3.49 0 0015.5 4c-1.93 0-3.496 1.577-3.496 3.518 0 .276.03.544.09.8-2.903-.146-5.477-1.54-7.205-3.659-.3.516-.47 1.115-.47 1.75 0 1.206.61 2.27 1.54 2.893-.566-.018-1.099-.174-1.565-.433v.044c0 1.686 1.2 3.092 2.797 3.414-.293.08-.6.124-.917.124-.224 0-.444-.02-.657-.064.445 1.356 1.735 2.346 3.265 2.374A6.99 6.99 0 013 19.54c-.45 0-.895-.026-1.334-.08A9.836 9.836 0 008.46 22c6.74 0 10.43-5.664 10.43-10.576 0-.16-.004-.318-.012-.475.716-.52 1.338-1.17 1.83-1.914-.655.294-1.36.493-2.095.583z"></path>
                </svg>
              </div>
              <p className="text-[10px] font-medium text-foreground group-hover:text-foreground transition-colors">X</p>
            </a>
            <a target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-1.5 rounded-lg border border-foreground/10 hover:bg-foreground/5 transition-all duration-200 hover:-translate-y-0.5 group" aria-label="Visit Instagram profile" title="Visit Instagram profile" href="https://www.instagram.com/nichooeni">
              <div className="text-foreground group-hover:text-foreground transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <p className="text-[10px] font-medium text-foreground group-hover:text-foreground transition-colors">Instagram</p>
            </a>
          </div>
        </div>

        {/* Speaking */}
        <div className="flex flex-col justify-between space-y-1.5">
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011 1v18a1 1 0 01-1 1H6a1 1 0 01-1-1V2a1 1 0 011-1h8v3z"></path>
            </svg>
            <p className="text-xs text-foreground/70 font-medium">Speaking</p>
          </div>
          <div className="group p-3 rounded-lg border border-foreground/10 hover:bg-foreground/5 transition-all duration-200 flex flex-col justify-between h-full">
            <p className="text-[10px] text-foreground/70 mb-2 leading-tight">Available for speaking at events about software development and emerging technologies.</p>
            <a className="text-[10px] font-medium text-foreground hover:underline inline-flex items-center gap-1 group/link" href="mailto:dejesusnichoeashley81@gmail.com">Get in touch<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7"></path></svg></a>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="space-y-1">
          <div className="space-y-1">
            <a className="group p-1.5 rounded-md border border-foreground/10 hover:bg-foreground/5 transition-all duration-200 hover:-translate-y-0.5 block" href="mailto:dejesusnichoeashley81@gmail.com">
              <div className="flex items-center gap-1 mb-0.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <p className="text-[9px] text-foreground/70 font-medium">Email</p>
              </div>
              <p className="text-[9px] font-medium text-foreground group-hover:text-foreground transition-colors">dejesusnichoeashley81@gmail.com</p>
            </a>
            <a download className="group p-1.5 rounded-md border border-foreground/10 hover:bg-foreground/5 transition-all duration-200 hover:-translate-y-0.5 block" href="/resume.pdf">
              <div className="flex items-center gap-1 mb-0.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <p className="text-[9px] text-foreground/70 font-medium">Let&apos;s Talk</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-medium text-foreground group-hover:text-foreground transition-colors">Download Resume</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </a>
            <a className="group p-1.5 rounded-md border border-foreground/10 hover:bg-foreground/5 transition-all duration-200 hover:-translate-y-0.5 block" href="#">
              <div className="flex items-center gap-1 mb-0.5">
                <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                <p className="text-[9px] text-foreground/70 font-medium">Community</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-medium text-foreground group-hover:text-foreground transition-colors">Join Discussion</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
