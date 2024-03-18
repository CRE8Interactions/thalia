'use client'

import React from 'react';

import Card from 'react-bootstrap/Card'

import { FAQ } from './FAQ';

export default function FAQWrapper() {

    const FAQs = [
        {
            question: "What is Thalia Mara Hall’s COVID policy?",
            answer: "The novel coronavirus, COVID-19, has been declared a worldwide pandemic by the World Health Organization. COVID-19 is contagious. The state of medical knowledge is evolving, but the virus is believed to spread from person-to-person contact, by contact with contaminated surfaces and objects, and in the air. People reportedly can be infected and show no symptoms and therefore spread the disease. The exact methods of spread and contraction are unknown. Evidence has shown that COVID-19 can cause serious and potentially life-threatening illness and death. Even with social distancing, mask-wearing and development of vaccines, new and emerging variants of COVID-19 may increase risk of transmission and/or mortality. An inherent risk of exposure to COVID-19 exists in any public place where people are present. \nThe City of Jackson cannot prevent anyone from becoming exposed to, contracting, or spreading COVID-19 while engaging in any activities, or attending any performances at Thalia Mara Hall. It is impossible to prevent against the presence of COVID - 19, and therefore you may be exposed to COVID-19 while engaging in any activities, or attending any performances at Thalia Mara Hall and/or increase the risk to yourself and others of contracting or spreading COVID-19 while engaging in any activities, or attending any performances at Thalia Mara Hall. \n The City of Jackson has taken enhanced safety and health protocols within our facility in good faith to follow applicable public health guidance. Nonetheless, an inherent risk of exposure to COVID-19 exists in any public place where people are present. As such, if you do not want to be exposed to COVID-19 and/or you do not want to increase the risk of exposure to yourself and other patrons then we encourage you to stay at home. By attending this event at Thalia Mara Hall, you voluntarily assume all risks related to the exposure of COVID-19. \nThe City of Jackson assumes no risk or responsibility involved in the spread of COVID-19 through this event or in its facility as a result of this event. You agree to adhere to and uphold all protocol set forth by the most current Executive Order of the City of Jackson regarding the COVID-19 pandemic. \nFurther requirements may be implemented at the request of a touring act/performing group.This may include but is not limited to proof of vaccination status or negative COVID-19 test within 48 hours. These requests will be implemented on a case-by-case basis."
        },
        {
            question: "Where can I buy tickets?",
            answer: "Tickets can be purchased through ThaliaMaraHall.net. The Thalia Mara Hall Box Office will open at least one hour before doors for every event. Thalia Mara Hall DOES NOT accept tickets purchased through third party websites. Please be advised that Thalia Mara Hall cannot guarantee the authenticity of tickets obtained through any other source such as StubHub, Craigslist, or other 3rd party site. If you purchase from a third party we cannot verify your tickets nor help you if your ticket does not scan, is fake, etc. When you purchase from a third party you do so at your own risk. Any tickets suspected of being purchased for the sole purpose of reselling can be cancelled at the discretion of Thalia Mara Hall."
        },
        {
            question: "What is will call?",
            answer: "Will call is a delivery option that can be selected when purchasing tickets. Will Call typically opens 1 hour prior to doors. The will call option will allow you to pick up your tickets at the Thalia Mara Hall Box Office on the day of the show. Please a bit earlier when you choose the will call option. You must present a valid picture ID and the credit card used for the purchase. No ID = no admission. No exceptions."
        },
        {
            question: "I am on the guest list, how do I get in?",
            answer: "Go to will call and present a valid picture ID for admittance. No ID = no admission. No exceptions."
        },
        {
            question: "Can I smoke at Thaila Mara Hall?",
            answer: "We have an outdoor patio where smoking and vaping is allowed. Per city ordinance, there can be no smoking and/or vaping inside the building."
        },
        {
            question: "Zero Tolerance for drug use or possession!",
            answer: "The use or possession of any illegal drugs will not be tolerated anywhere inside or outside the venue. Security personnel and narcotics officers will be working and enforcing all drug related laws. Do not bring any illegal substances to the event as violators will be prosecuted to the fullest extent of the law. If you are found impaired at the door, security will not allow you to enter the venue. Event staff reserves the right to refuse entry to anyone."
        },
        {
            question: "What ADA accessible seating does Thalia Mara Hall have available?",
            answer: "There is ADA Accessible seating on Rows P and MM of the Rear Orchestra."
        },
        {
            question: "Is there a bar available at Thalia Mara Hall?",
            answer: "At most events, there is a full bar available for patrons over twenty-one (21) years old with a valid ID."
        },
        {
            question: "What items are not allowed in Thalia Mara Hall?",
            answer: "No guns, knives, weapons (even with permit), pepper spray, projectiles of any kind, or any other item that could be used to inflict harm. Replicas of any type of weapon are NOT permitted. No drugs, drug paraphernalia or illegal substances of any kind. No outside food or drinks. No personal video cameras, Go-Pros, selfie sticks, drones, masks or laser pointers. No professional audio, video, or audio recording equipment - (including detachable lenses, tripods, zooms or commercial use rigs). No unsealed liquids or gels of any kind. No large bags over (10” x 10”), backpacks, Camelbacks or Bota bags. \nThis list of prohibited items is subject to change at the discretion of venue management. We have the right to refuse admission or ask you to leave if you try to bring any of these items inside the venue."
        },
        {
            question: "What is the photo policy?",
            answer: "Our photo policy changes each night as it is dictated to us by the headlining artist of the event that night. We typically do not find out the official photo policy of the artist until they arrive the evening of the show date. With that being said, in most cases (but again, not all), little point & shoot cameras (non-professional) are fine/allowed in and typically SLR cameras (professional w/removable lens) need to be accompanied by a photo pass. NO FLASH PHOTOGRAPHY IN ANY CIRCUMSTANCE. We do NOT allow iPads inside the venue. Please leave them at home or in your car. Same goes for selfie sticks! Do not bring them in! \nWhat is the photo policy for video cameras? Absolutely no video cameras without a photo pass & further restriction do apply even with a photo pass. Please contact the artist if you are interested in videotaping them or their show.\n I’m a photographer/blogger. How do I get a photo / press pass? Can you give me publicist/label info? Please contact the artist you would like to photograph about getting a photo pass for their show here. We (Thalia Mara Hall) cannot grant photo passes–as it is the artist’s decision as to who they want to photograph them. Same for press passes, please contact the artist’s label or publicist for this. Unfortunately, we cannot give you this contact information."
        },
        {
            question: "Safety & Medical",
            answer: "Thalia Mara Hall is dedicated to providing a safe environment. Public and private security will be present throughout the entire event. The Security Staff will be available to assist your needs including any medical requests."
        },
    ]
    return (
        <section className="spacer">
            <Card body>
                <h1 className='headline-2 text-center mb-4'>FAQ</h1>
                {FAQs?.map(faq => (
                    <FAQ faq={faq} />
                ))}
            </Card>
        </section>
    );
}
