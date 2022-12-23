import React from 'react';
import Footer from './Footer';
import TopStoryImage from './images/TopStoryImage.png';
import Story2 from './images/Story2.png';
import Story3 from './images/Story3.png';
import Story4 from './images/Story4.png';
import MentalHealth from './images/wellness-mental-health.jpg';
import Diet from './images/Wellness_Diet_Weight.jpg';
import Pregnancy from './images/Wellness_Womens_Health.jpg';
import Relationships from './images/Wellness_Health_Beauty.jpg';
import Fitness from './images/Wellness_Fitness_and_Excercise.jpg';
import BrainFog from './images/brain_fog.jpg';
import JohnWhyte from './images/john-whyte-image.png';
import ExpertInsight1 from './images/ExpertInsight1.png';
import ExpertInsight2 from './images/ExpertInsight2.png';
import ExpertInsight3 from './images/ExpertInsight3.png';
import ExpertInsight4 from './images/ExpertInsight4.png';
import ExpertInsight5 from './images/ExpertInsight5.png';
import SpecialSection1 from './images/SpecialSection1.jpg';
import SpecialSection2 from './images/SpecialSection2.jpg';
import SpecialSection3 from './images/SpecialSection3.jpg';
import FeaturedStory1 from './images/FeaturedStory1.jpg';
import FeaturedStory2 from './images/FeaturedStory2.jpg';
import FeaturedStory3 from './images/FeaturedStory3.jpg';
import Envelope from './images/envelop.png';
import {AiOutlineArrowRight} from 'react-icons/ai';
import BMICalculator from './images/bmi-calculator.png';
import DrugInteraction from './images/drugs-interaction-checker.png';
import PillIdentifierImage from './images/pill-identifier.png';
import OvulationCalculator from './images/ovulation-calculator.png';
import PregnancyCalendar from './images/pregnancy-calendar.png';
import MissionMod from './images/mission-mod.jpg';
import {FaFacebookF, FaTwitter, FaInstagram, FaTiktok} from 'react-icons/fa';
import AppStore from './images/AppStore.png';
import GooglePlay from './images/GooglePlayIcon.png';
import TopStory from './TopStory';
/*In order for the content to show, need to fill in info for img, heading, and anchor tags (no yellow bar should show)*/

function Home() {
  let HealthAZLinks = [
    {name: 'ADD/ADHD - Childhood', href: 'https://www.webmd.com/add-adhd/childhood-adhd/default.htm'},
    {name: 'ADHD - Childhood', href: 'https://www.webmd.com/add-adhd/default.htm'},
    {name: 'Allergies', href: 'https://www.webmd.com/allergies/default.htm'},
    {name: "Alzheimer's", href: 'https://www.webmd.com/alzheimers/default.htm'},
    {name: 'Ankylosing Spondylitis', href: 'https://www.webmd.com/ankylosing-spondylitis/default.htm'},
    {name: 'Anxiety Disorders', href: 'https://www.webmd.com/anxiety-panic/default.htm'},
    {name: 'ADD/ADHD - Childhood', href: 'https://www.webmd.com/add-adhd/childhood-adhd/default.htm'},
    {name: 'Arthritis', href: 'https://www.webmd.com/arthritis/default.htm'},
    {name: 'Asthma', href: 'https://www.webmd.com/asthma/default.htm'},
    {name: 'Back Pain', href: 'https://www.webmd.com/back-pain/default.htm'},
    {name: 'Cancer', href: 'https://www.webmd.com/cancer/default.htm'},
    {name: "Children's Vaccines", href: 'https://www.webmd.com/children/vaccines/default.htm'},
    {name: 'Cholesterol', href: 'https://www.webmd.com/cholesterol-management/default.htm'},
    {name: 'Cold, Flu, & Cough', href: 'https://www.webmd.com/cold-and-flu/default.htm'},
    {name: 'COPD', href: 'https://www.webmd.com/lung/copd/default.htm'},
    {name: 'Coronavirus', href: 'https://www.webmd.com/coronavirus'},
    {name: 'ADD/ADHD - Childhood', href: 'https://www.webmd.com/add-adhd/childhood-adhd/default.htm'},
    {name: 'Depression', href: 'https://www.webmd.com/depression/default.htm'},
    {name: 'Diabetes', href: 'https://www.webmd.com/diabetes/type-2-diabetes'},
    {name: 'Digestive Disorders', href: 'https://www.webmd.com/digestive-disorders/default.htm'},
    {name: 'Eye Health', href: 'https://www.webmd.com/eye-health/default.htm'},
    {name: 'Health & Balance', href: 'https://www.webmd.com/balance/default.htm'},
    {name: 'Heart Health', href: 'https://www.webmd.com/heart/default.htm'},
    {name: 'Heartburn/GERD', href: 'https://www.webmd.com/heartburn-gerd/default.htm'},
    {name: 'Hypertension', href: 'https://www.webmd.com/hypertension-high-blood-pressure/default.htm'},
    {name: 'Lung Cancer', href: 'https://www.webmd.com/lung-cancer/default.htm'},
    {name: 'Mental Health', href: 'https://www.webmd.com/mental-health/default.htm'},
    {name: 'Migraines', href: 'https://www.webmd.com/migraines-headaches/default.htm'},
    {name: 'Multiple Myeloma', href: 'https://www.webmd.com/cancer/multiple-myeloma/default.htm'},
    {name: 'Multiple Sclerosis', href: 'https://www.webmd.com/multiple-sclerosis/default.htm'},
    {name: 'Oral Care', href: 'https://www.webmd.com/oral-health/default.htm'},
    {name: 'Orthopedics', href: 'https://www.webmd.com/orthopedics/default.htm'},
    {name: 'Osteoporosis', href: 'https://www.webmd.com/osteoporosis/default.htm'},
    {name: 'Ovarian Cancer', href: 'https://www.webmd.com/ovarian-cancer/default.htm'},
    {name: 'Prostate Cancer', href: 'https://www.webmd.com/prostate-cancer/default.htm'},
    {name: 'Psoriasis', href: 'https://www.webmd.com/skin-problems-and-treatments/psoriasis/default.htm'},
    {name: 'Rheumatoid Arthritis', href: 'https://www.webmd.com/rheumatoid-arthritis/default.htm'},
    {name: 'Schizophrenia', href: 'https://www.webmd.com/schizophrenia/default.htm'},
    {name: 'Sexual Conditions', href: 'https://www.webmd.com/sexual-conditions/default.htm'},
    {name: 'Skin Problems', href: 'https://www.webmd.com/skin-problems-and-treatments/default.htm'},
    {name: 'Sleep Disorders', href: 'https://www.webmd.com/sleep-disorders/default.htm'},
  ];



  return (
    <div>
      {/*To make sure it doesn't conflict with the navbar, have a large mt, then have an md: media query to move the content back up to a normal position */}
      {/*Today's Top Stories: */}
      <TopStory/>
      
      {/*Today's Top Stories - other 3 stories */}
      <section className='articles flex flex-row mt-12 mb-12 justify-between'>
        <div className='article flex flex-row ml-8 mr-20 cursor-pointer' onClick={() => {window.open('https://www.webmd.com/diet/ss/slideshow-what-to-do-after-overeating', "_blank");}}>
          <img alt='Story 2' src={Story2}/>
          <h2 className='text-left font-bold ml-4 text-2xl mt-10 text-gray-700'>What to Do After You Overeat</h2>
        </div>

        <div className='article flex flex-row cursor-pointer' onClick={() => {window.open('https://www.webmd.com/diet/news/20221114/our-food-is-getting-sweeter-changing-appetities', "_blank");}}>
          <img alt='Story 3' src={Story3}/>
          <h2 className='text-left font-bold ml-4 text-2xl mt-10 text-gray-700'>Foods Are Getting Sweeter and Appetites Are Changing</h2>
        </div>

        <div className='article flex flex-row cursor-pointer' onClick={() => {window.open('https://www.webmd.com/diabetes/news/20221122/eating-honey-manage-cholesterol-blood-sugar', "_blank");}}>
          <img alt='Story 4' src={Story4}/>
          <h2 className='text-left font-bold ml-4 text-2xl mt-10 text-gray-700'>Honey May Help You Manage Cholesterol, Blood Sugar</h2>
        </div>
      </section>

      {/*Need to make the sections responsive in mobile, which I will do later. One way to make the sections responsive (if relevant) is to use flex grid with the grid template columns */}
      {/*Living Healthy: */}
      <section>
        <div className='title-and-link flex flex-row justify-between border-b border-gray-300 pb-4'>
          <h1 className='mt-8 text-left text-nav-bg-color pl-10 text-3xl font-bold'>Living Healthy</h1>
          <a className='mt-12 text-blue-500 pr-5' href='https://www.webmd.com/'>See all</a>
        </div>
        <div className='images flex flex-row mt-10 flex-wrap mb-10'>
          <div className='relative cursor-pointer px-5 py-2' onClick={() => {window.open('https://www.webmd.com/mental-health/default.htm', "_blank");}}>
            <img alt='Mental Health' src={MentalHealth} className='w-full h-64 ml-10'/>
            <h2 className='text-left font-bold ml-4 text-2xl bottom-5 left-20 w-full text-white absolute'>Mental Health</h2>
          </div>
          <div className='relative cursor-pointer px-5 py-2' onClick={() => {window.open('https://www.webmd.com/diet/default.htm', "_blank");}}>
            <img alt='Diet & Weight Management' src={Diet} className='w-full h-64 ml-10'/>
            <h2 className='text-left font-bold ml-4 text-2xl bottom-5 left-20 w-full text-white absolute'>Diet & Weight Management</h2>
          </div>
          <div className='relative cursor-pointer px-5 py-2' onClick={() => {window.open('https://www.webmd.com/baby/default.htm', "_blank");}}>
            <img alt='Pregnancy' src={Pregnancy} className='w-full h-64 ml-10'/>
            <h2 className='text-left font-bold ml-4 text-2xl bottom-5 left-20 w-full text-white absolute'>Pregnancy</h2>
          </div>
          <div className='relative cursor-pointer px-5 py-2' onClick={() => {window.open('https://www.webmd.com/sex-relationships/default.htm', "_blank");}}>
            <img alt='Sex & Relationships' src={Relationships} className='w-full h-64 ml-10'/>
            <h2 className='text-left font-bold ml-4 text-2xl bottom-5 left-12 w-full text-white absolute'>Sex & Relationships</h2>
          </div>
          <div className='relative cursor-pointer px-5 py-2' onClick={() => {window.open('https://www.webmd.com/fitness-exercise/default.htm', "_blank");}}>
            <img alt='Fitness & Exercise' src={Fitness} className='w-full h-64 ml-10'/>
            <h2 className='text-left font-bold ml-4 text-2xl bottom-5 left-16 w-full text-white absolute'>Fitness & Exercise</h2>
          </div>
        </div>
      </section>

      <section>
        <div className='title-and-link flex flex-row justify-between border-b border-gray-300 pb-4'>
          <h1 className='mt-8 text-left text-nav-bg-color pl-10 text-3xl font-bold'>Health News</h1>
          <a className='mt-12 text-blue-500 pr-5' href='https://www.webmd.com/'>See all</a>
        </div>

        <div className='headline flex flex-row mt-4 cursor-pointer border-b border-gray-300 pb-4' onClick={() => {window.open('https://www.webmd.com/lung/news/20221128/is-it-long-covid-or-dementia-or-both', "_blank");}}>
          <img className='ml-10' alt='headline' src={BrainFog}/>
          <div className='headline-text flex flex-col px-4 justify-center'>
            <h1 className='font-bold text-button-color text-4xl text-left'>Is It Long COVID, or Dementia, or Both?</h1>
            <p className='text-left mt-2 text-xl font-normal text-gray-700'> Some scientists are starting to confirm what doctors, patients, and their families can already see: Older patients who have had COVID-19 have a higher risk of getting dementia. </p>
            
          </div>
        </div>
      </section>

      <section className='articles flex flex-row mt-12 mb-12 justify-between'>
        <div className='article flex flex-row ml-8 mr-20 cursor-pointer border-r border-gray-300' onClick={() => {window.open('https://www.webmd.com/heart-disease/news/20221128/cutting-table-salt-tied-to-lower-heart-disease-risk', "_blank");}}>
          
          <h2 className='text-left font-bold mr-20 text-2xl mt-10 text-gray-700'>Cutting Table Salt Tied to Lower Heart Disease Risk</h2>
        </div>

        <div className='article flex flex-row cursor-pointer border-r border-gray-300 mr-10' onClick={() => {window.open('https://www.webmd.com/healthy-aging/news/20221128/a-purpose-in-life-might-lengthen-your-life#1', "_blank");}}>
          
          <h2 className='text-left font-bold mr-20 text-2xl mt-10 text-gray-700'>A Purpose in Life Might Lengthen Your Life</h2>
        </div>

        <div className='article flex flex-row cursor-pointer' onClick={() => {window.open('https://www.webmd.com/lung/news/20221128/new-variant-of-concern-xbb-may-lack-surge-potential', "_blank");}}>
          
          <h2 className='text-left font-bold mr-20 text-2xl mt-10 text-gray-700'>New COVID ‘Variant of Concern’ XBB May Lack Surge Potential</h2>
        </div>
      </section>

      {/*Expert Insights */}
      <section className='bg-nav-bg-color mb-28'>
        <div className='flex'>
          <div className='flex ml-5'>
            <img src={JohnWhyte} alt='John Whyte' className='rounded-full  py-10 px-20'/>
            <div className='author-info flex flex-col mt-10'>
              <h2 className='text-webmd-bg-color text-left font-extralight'>Expert Insights From</h2>
              <h1 className='text-webmd-bg-color font-bold text-2xl text-left'>John Whyte, MD</h1>
              <h2 className='text-webmd-bg-color text-left font-extralight'>WebMD Chief Medical Officer</h2>
            </div>
          <div className='border-b border-gray-300 w-96 block mb-20 ml-24'></div>
          </div>
        </div>

        <div className='flex flex-row px-20'>
          <div className='flex flex-col cursor-pointer mt-10 mr-10' onClick={() => {window.open('https://www.webmd.com/schizophrenia/video/schizophrenia-less-lonely', "_blank");}}>
            <img alt='Trinh Dang' src={ExpertInsight1}/>
            <h1 className='text-webmd-bg-color text-left text-3xl font-bold mt-5'>WebMD Champions of Change: Caregivers of Schizophrenia</h1>
            <p className='text-webmd-bg-color text-left mt-5 mb-20'>See how Trinh Dang aims to improve the social and personal lives of people with schizophrenia.</p>
          </div>

          <div className='border-r bg-gray-100 mt-10 mb-8'></div>

          <div className='flex flex-col ml-10'>
            <div className='article flex flex-row mr-20 cursor-pointer' onClick={() => {window.open('https://www.webmd.com/cancer/cancer-in-context/video/fabrice-barlesi', "_blank");}}>
              <img alt='Story 2' src={ExpertInsight2}/>
              <h2 className='text-left font-bold ml-4 text-2xl mt-10 text-webmd-bg-color'>Cancer Prevention, Treatment in Europe vs. U.S.</h2>
            </div>

            <div className='article flex flex-row cursor-pointer mt-5' onClick={() => {window.open('https://www.webmd.com/a-to-z-guides/video/thomas-serval', "_blank");}}>
              <img alt='Story 3' src={ExpertInsight3}/>
              <h2 className='text-left font-bold ml-4 text-2xl mt-10 text-webmd-bg-color'>Your Bathroom May Be the Future Doctor's Office</h2>
            </div>

            <div className='article flex flex-row cursor-pointer mt-5' onClick={() => {window.open('https://www.webmd.com/coronavirus-in-context/video/eric-topol-booster-update', "_blank");}}>
              <img alt='Story 4' src={ExpertInsight4}/>
              <h2 className='text-left font-bold ml-4 text-2xl mt-10 text-webmd-bg-color'>Answers to Your Questions About Booster Shots</h2>
            </div>

            <div className='article flex flex-row cursor-pointer mt-5' onClick={() => {window.open('https://www.webmd.com/coronavirus-in-context/video/charles-sophy', "_blank");}}>
              <img alt='Story 4' src={ExpertInsight5}/>
              <h2 className='text-left font-bold ml-4 text-2xl mt-10 text-webmd-bg-color'>Five Keys to Resolving Conflict in the Family Unit</h2>
            </div>
          </div>
        </div>
      </section>

      {/*Special Section */}
      <section>
        <div className='title-and-link flex flex-row justify-between border-b border-gray-300 pb-4 mb-20'>
          <h1 className='mt-8 text-left text-nav-bg-color pl-10 text-3xl font-bold'>Special Section</h1>
          <a className='mt-12 text-blue-500 pr-5' href='https://www.webmd.com/'>See all</a>
        </div>

        <div className='justify-between grid grid-cols-3 gap-4'>
          <div className='author-info flex flex-col bg-white px-8 mb-8 cursor-pointer' onClick={() => {window.open('https://www.webmd.com/schizophrenia/toc-caregivers', "_blank");}}>
            <img src={SpecialSection1} alt='Special Section 1' className='h-96 w-full'/>
            <p className='text-white bg-red-600 text-sm py-2 mt-6 cursor-pointer'>Caregivers of Schizophrenia</p>
            {/*Need to center this ^ div later */}
            <h1 className='text-blue-600 text-3xl text-left font-semibold mt-6'>Mental Health Advocates Dedicated to Educating Others</h1>
            <p className='text-left text-gray-700 text-xl mb-7 mt-4'>Meet these caregivers who have insightful life lessons to share.</p>
          </div>
          <div className='author-info flex flex-col bg-white px-8 mb-8 cursor-pointer' onClick={() => {window.open('https://doctor.webmd.com/choice-awards', "_blank");}}>
            <img src={SpecialSection2} alt='Special Section 1' className='h-96 w-full'/>
            <p className='text-white bg-red-600 text-sm py-2 mt-6 cursor-pointer'>Best Hospitals</p>
            {/*Need to center this ^ div later */}
            <h1 className='text-blue-600 text-3xl text-left font-semibold mt-6'>WebMD Choice Awards</h1>
            <p className='text-left text-gray-700 text-xl mb-7 mt-4'>See the top health systems in your area as voted by patients and health care providers.
            </p>
          </div>
          <div className='author-info flex flex-col bg-white px-8 mb-8 cursor-pointer' onClick={() => {window.open('https://www.webmd.com/mental-health/addiction/story/kicking-opioids-in-prison', "_blank");}}>
            <img src={SpecialSection3} alt='Special Section 1' className='h-96 w-full'/>
            <p className='text-white bg-red-600 text-sm py-2 mt-6 cursor-pointer'>WebMD Investigates</p>
            {/*Need to center this ^ div later */}
            <h1 className='text-blue-600 text-3xl text-left font-semibold mt-6'>The Fight to Treat Opioid Addiction in Prison</h1>
            <p className='text-left text-gray-700 text-xl mb-7 mt-4'>Medication-assisted treatment helps. So why is it so hard to get in most jails and prisons?
            </p>
          </div>
        </div>
      </section>

      {/*Trending Topics */}
      <section>
        <div className='title-and-link flex flex-row justify-between border-b border-gray-300 pb-4 mb-20'>
            <h1 className='mt-8 text-left text-nav-bg-color pl-10 text-3xl font-bold'>Trending Topics</h1>
          </div>
        <div className='flex flex-wrap items-start gap-y-8 gap-x-4 ml-8 mb-8'>
          <li className='bg-list-color list-none rounded-full py-2 px-4'>
            <a className='text-nav-bg-color' href='https://www.webmd.com/vaccines/covid-19-vaccine/covid-19-vaccine-booster#1'>COVID Vaccine Booster</a>
          </li>
          <li className='bg-list-color list-none rounded-full py-2 px-4'>
            <a className='text-nav-bg-color' href='https://www.webmd.com/lung/covid-omicron-variant#1'>Omicron Variant</a>
          </li>
          <li className='bg-list-color list-none rounded-full py-2 px-4'>
            <a className='text-nav-bg-color' href='https://www.webmd.com/lung/what-is-long-covid-pasc#1'>Long COVID</a>
          </li>
          <li className='bg-list-color list-none rounded-full py-2 px-4'>
            <a className='text-nav-bg-color' href='https://www.webmd.com/lung/rsv-in-babies'>RSV In Children</a>
          </li>
          <li className='bg-list-color list-none rounded-full py-2 px-4'>
            <a className='text-nav-bg-color' href='https://www.webmd.com/a-to-z-guides/what-to-know-about-volcanic-eruption-safety'>Volcanic Eruptions</a>
          </li>
          <li className='bg-list-color list-none rounded-full py-2 px-4'>
            <a className='text-nav-bg-color' href='https://www.webmd.com/cold-and-flu/antimicrobial-resistance-what-to-know'>Antimicrobial Resistance</a>
          </li>
          <li className='bg-list-color list-none rounded-full py-2 px-4'>
            <a className='text-nav-bg-color' href='https://www.webmd.com/dvt/blood-clots'>Blood Clots</a>
          </li>
          <li className='bg-list-color list-none rounded-full py-2 px-4'>
            <a className='text-nav-bg-color' href='https://www.webmd.com/first-aid/how-to-respond-to-an-active-shooter'>Active Shooter</a>
          </li>
          <li className='bg-list-color list-none rounded-full py-2 px-4'>
            <a className='text-nav-bg-color' href='https://www.webmd.com/mental-health/addiction/what-are-whippets'>Whippets</a>
          </li>
          <li className='bg-list-color list-none rounded-full py-2 px-4'>
            <a className='text-nav-bg-color' href='https://www.webmd.com/mental-health/health-effects-antisemitism'>Antisemitism</a>
          </li>
        </div>
      </section>

      {/*Featured Stories */}
      <section>
        <div className='title-and-link flex flex-row justify-between border-b border-gray-300 pb-4 mb-20'>
          <h1 className='mt-8 text-left text-nav-bg-color pl-10 text-3xl font-bold'>Featured Stories</h1>
          <a className='mt-12 text-blue-500 pr-5' href='https://www.webmd.com/'>See all</a>
        </div>

        <div className='justify-between grid grid-cols-3 gap-4'>
          <div className='author-info flex flex-col bg-list-color px-8 mb-8 cursor-pointer' onClick={() => {window.open('https://www.webmd.com/heart/ss/cm/food-10-ways-to-protect-your-heart', "_blank");}}>
            <img src={FeaturedStory1} alt='Featured Story 1' className=' w-full max-w-full'/>
            
            <h1 className='text-nav-bg-color text-3xl text-left font-semibold mt-6'>Here’s What to Eat to Protect Your Heart
            </h1>
            <p className='text-left text-nav-bg-color text-xl mb-10 mt-4'>A healthy diet can help prevent heart disease and related health problems.</p>
          </div>


          <div className='author-info flex flex-col bg-list-color px-8 mb-8 cursor-pointer' onClick={() => {window.open('https://www.webmd.com/heart-disease/ss/slideshow-heart-diesase-clues', "_blank");}}>
            <img src={FeaturedStory2} alt='Featured Story 1' className=' w-full max-w-full'/>
            
            <h1 className='text-nav-bg-color text-3xl text-left font-semibold mt-6'>12 Unexpected Signs of Heart Disease

            </h1>
            <p className='text-left text-nav-bg-color text-xl mb-10 mt-4'>Dizziness and even changes to skin may be red flags. Learn more.</p>
          </div>



          <div className='author-info flex flex-col bg-list-color px-8 mb-8 cursor-pointer' onClick={() => {window.open('https://www.webmd.com/hypertension-high-blood-pressure/ss/slideshow-high-blood-pressure-effects', "_blank");}}>
            <img src={FeaturedStory3} alt='Featured Story 1' className=' w-full max-w-full'/>
            
            <h1 className='text-nav-bg-color text-3xl text-left font-semibold mt-6'>What High Blood Pressure Can Do to Your Body
            </h1>
            <p className='text-left text-nav-bg-color text-xl mb-10 mt-4'>Learn how high BP can raise your risk for many serious conditions.
            </p>
          </div>
        </div>
      </section>

      {/*NewsLetter */}
      <section class="signup-section ">
        <div class="flex flex-row  text-center justify-center">
          <div class="flex bg-nav-bg-color mt-11 mb-11 px-11 py-2 justify-between rounded-md w-full mx-5">
            <div class="flex flex-col justify-center mr-36">
              <h3 class="text-hero-secondary font-semibold mt-2 text-2xl text-webmd-bg-color text-left">Free WebMD Newsletters</h3>
              <p class="text-left text-webmd-bg-color">Doctor-approved health and wellness information delivered to your inbox.</p>
              <div className='checkbox flex mt-6 justify-between'>
                <div className='checkbox flex'>
                  <input type="checkbox" id="checkbox1" className="h-6 w-6 rounded-md">
                  </input>
                  <label for="checkbox1" className="text-webmd-bg-color text-left ml-2">Daily Updates</label>
                </div>
                <div className='checkbox flex'>
                  <input type="checkbox" id="checkbox2" className="h-6 w-6 rounded-md">
                  </input>
                  <label for="checkbox2" className="text-webmd-bg-color text-left ml-2">Women's Health</label>
                </div>
                <div className='checkbox flex'>
                  <input type="checkbox" id="checkbox3" className="h-6 w-6 rounded-md">
                  </input>
                  <label for="checkbox3" className="text-webmd-bg-color text-left ml-2">Good Health</label>
                </div>
              </div>
              <div className='flex flex-row mt-6'>
                <input className='gap-1 px-3 h-12 mb-1 w-full' placeholder='Enter your email'></input>
                <div className=' h-12'>
                  <button className='cursor-pointer bg-grAy  px-2 h-full uppercase font-semibold text-gray-500'>Subscribe</button>
                </div>
              </div>
              <div>
                <p class="text-left text-webmd-bg-color text-xs py-4">By clicking Subscribe, I agree to the WebMD <span className='cursor-pointer underline' onClick={() => {window.open('https://www.webmd.com/about-webmd-policies/about-terms-and-conditions-of-use', "_blank");}}>Terms & Conditions</span> and <span className='cursor-pointer underline' onClick={() => {window.open('https://www.webmd.com/about-webmd-policies/about-privacy-policy', "_blank");}}>Privacy Policy</span> and understand that I may opt out of WebMD subscriptions at any time.</p>
              </div>
              <div>
                <p class="text-left text-webmd-bg-color underline font-bold py-4">See All WebMD Newsletters</p>
              </div>
              
            </div>
            <img src={Envelope} alt='Envelope'/>
          </div>
        </div>
      </section>

      {/*Blogs: Patient and Expert Contributors */}
      <section>
        <div className='title-and-link flex flex-row justify-between border-b border-gray-300 pb-4 mb-20'>
          <h1 className='mt-8 text-left text-nav-bg-color pl-10 text-3xl font-bold'>Featured Stories</h1>
          <a className='mt-12 text-blue-500 pr-5' href='https://www.webmd.com/'>See all</a>
        </div>

        <div className='justify-between grid grid-cols-3 gap-4'>
          <div className='author-info flex flex-col bg-list-color px-8 mb-8 ml-6  relative' >
            <img src={FeaturedStory1} alt='Featured Story 1' className=' w-full max-w-full'/>
            <button className='bg-white rounded-md absolute left-10 top-2 font-semibold px-1' onClick={() => {window.open('https://blogs.webmd.com/ankylosing-spondylitis/default.htm', "_blank");}}>Ankylosing Spondylitis</button>
            <h1 className='text-black text-center font-bold mt-6'>Patient Name 1
            </h1>
            <p className='text-center text-sm mb-10 mt-4 border-b border-white pb-2'>Diagnosed since 2001</p>
            <div onClick={() => {window.open('https://blogs.webmd.com/ankylosing-spondylitis/20221201/parenting-with-ankylosing-spondylitis', "_blank");}} className='cursor-pointer'>
              <p className='text-xl text-left text-blue-600 font-semibold -mt-4 mb-10'>Parenting With Ankylosing Spondylitis</p>
              <div className='bg-white p-4 absolute right-4 bottom-6'><AiOutlineArrowRight/></div>
            </div>
          </div>


          <div className='author-info flex flex-col bg-list-color px-8 mb-8 ml-6  relative' >
            <img src={FeaturedStory1} alt='Featured Story 1' className=' w-full max-w-full'/>
            <button className='bg-white rounded-md absolute left-10 top-2 font-semibold px-1' onClick={() => {window.open('https://blogs.webmd.com/ankylosing-spondylitis/default.htm', "_blank");}}>Ankylosing Spondylitis</button>
            <h1 className='text-black text-center font-bold mt-6'>Patient Name 1
            </h1>
            <p className='text-center text-sm mb-10 mt-4 border-b border-white pb-2'>Diagnosed since 2001</p>
            <div onClick={() => {window.open('https://blogs.webmd.com/ankylosing-spondylitis/20221201/parenting-with-ankylosing-spondylitis', "_blank");}} className='cursor-pointer'>
              <p className='text-xl text-left text-blue-600 font-semibold -mt-4 mb-10'>Parenting With Ankylosing Spondylitis</p>
              <div className='bg-white p-4 absolute right-4 bottom-6'><AiOutlineArrowRight/></div>
            </div>
          </div>



          <div className='author-info flex flex-col bg-list-color px-8 mb-8 ml-6  relative' >
            <img src={FeaturedStory1} alt='Featured Story 1' className=' w-full max-w-full'/>
            <button className='bg-white rounded-md absolute left-10 top-2 font-semibold px-1' onClick={() => {window.open('https://blogs.webmd.com/ankylosing-spondylitis/default.htm', "_blank");}}>Ankylosing Spondylitis</button>
            <h1 className='text-black text-center font-bold mt-6'>Patient Name 1
            </h1>
            <p className='text-center text-sm mb-10 mt-4 border-b border-white pb-2'>Diagnosed since 2001</p>
            <div onClick={() => {window.open('https://blogs.webmd.com/ankylosing-spondylitis/20221201/parenting-with-ankylosing-spondylitis', "_blank");}} className='cursor-pointer'>
              <p className='text-xl text-left text-blue-600 font-semibold -mt-4 mb-10'>Parenting With Ankylosing Spondylitis</p>
              <div className='bg-white p-4 absolute right-4 bottom-6'><AiOutlineArrowRight/></div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className='bg-list-color'>
        <div className='title-and-link flex flex-row justify-between border-b border-gray-300 pb-4 mb-20'>
          <h1 className='mt-8 text-left text-nav-bg-color pl-10 text-3xl font-bold'>Tools, Trackers & Calculators</h1>
        </div>

        <div className='flex grid grid-cols-5 gap-2 bg-list-color mb-10 border-b border-gray-300 pb-10'>
          <div className='flex flex-col justify-center items-center cursor-pointer' onClick={() => {window.open('https://www.webmd.com/diet/body-bmi-calculator', "_blank");}}>
            <img src={BMICalculator} alt='BMI Calculator' className='hover:opacity-50'/> {/* Add opacity hover to other elements of the home page */}
            <h1 className='text-button-color text-2xl font-bold'>BMI Calculator</h1>
          </div>
          <div className='flex flex-col justify-center items-center cursor-pointer' onClick={() => {window.open('https://www.webmd.com/baby/healthtool-ovulation-calculator', "_blank");}}>
            <img src={OvulationCalculator} alt='Ovulation Calculator' className='hover:opacity-50'/> 
            <h1 className='text-button-color text-2xl font-bold'>Ovulation Calculator</h1>
          </div>
          <div className='flex flex-col justify-center items-center cursor-pointer' onClick={() => {window.open('https://www.webmd.com/baby/healthtool-daily-pregnancy-calendar', "_blank");}}>
            <img src={PregnancyCalendar} alt='Pregnancy Calendar' className='hover:opacity-50'/> 
            <h1 className='text-button-color text-2xl font-bold'>Pregnancy Calendar</h1>
          </div>
          <div className='flex flex-col justify-center items-center cursor-pointer' onClick={() => {window.open('https://www.webmd.com/pill-identification/default.htm', "_blank");}}>
            <img src={PillIdentifierImage} alt='Pill Identifier' className='hover:opacity-50'/> 
            <h1 className='text-button-color text-2xl font-bold'>Pill Identifier</h1>
          </div>
          <div className='flex flex-col justify-center items-center cursor-pointer' onClick={() => {window.open('https://www.webmd.com/interaction-checker/default.htm', "_blank");}}>
            <img src={DrugInteraction} alt='Drugs Interaction Checker' className='hover:opacity-50'/> 
            <h1 className='text-button-color text-2xl font-bold'>Drugs Interaction Checker</h1>
          </div>
        </div>
        <div className='flex flex-wrap items-start gap-y-8 gap-x-4 ml-8 mb-8 pb-14'>
          <li className='bg-white list-none rounded-full py-2 px-4'>
            <a className='text-black' href='https://pets.webmd.com/cats/healthy-cat-tool/default.htm'>Cat Health Tool</a>
          </li>
          <li className='bg-white list-none rounded-full py-2 px-4'>
            <a className='text-black' href='https://pets.webmd.com/dogs/healthy-dog-tool/default.htm'>Dog Health Tool</a>
          </li>
          <li className='bg-white list-none rounded-full py-2 px-4'>
            <a className='text-black' href='https://www.webmd.com/baby/healthtool-due-date-calculator'>Due Date Calendar</a>
          </li>
          <li className='bg-white list-none rounded-full py-2 px-4'>
            <a className='text-black' href='https://www.webmd.com/fitness-exercise/healthtool-exercise-calculator'>Fitness Calorie Counter</a>
          </li>
          <li className='bg-white list-none rounded-full py-2 px-4'>
            <a className='text-black' href='https://www.webmd.com/parenting/kids-bmi-calculator'>Kids BMI</a>
          </li>
          <li className='bg-white list-none rounded-full py-2 px-4'>
            <a className='text-black' href='https://www.webmd.com/baby/interactive-pregnancy-tool-fetal-development'>Visual Pregnancy Timeline</a>
          </li>
        </div>
      </section>

      {/* Health A-Z */}
      <section className='items-center justify-center'>
        <div className='title-and-link flex flex-row justify-between border-b border-gray-300 pb-4 mb-20'>
          <h1 className='mt-8 text-left text-nav-bg-color pl-10 text-3xl font-bold'>Health A-Z</h1>
          <a className='mt-12 text-blue-500 pr-5' href='https://www.webmd.com/'>See all</a>
        </div>

        <div className='px-5 mx-5 rounded-sm bg-white grid grid-cols-4 mb-10'>
            {
              HealthAZLinks.map((link) => (
                <div className='flex'>
                  <div className='text-blue-500 mt-5'><AiOutlineArrowRight/></div>
                  <a href={link.href}><p className='text-nav-bg-color border-b border-gray-300 m-4'>{link.name}</p></a>
                </div>
              ))
            }
          </div>
      </section>

      {/* Mission Statement */}
      <section className='border-b border-gray-300 mb-10'>
        <div className='flex grid grid-cols-2 gap-4'>
          <img src={MissionMod} alt='Mission Mod' />
          <div className='flex flex-col'>
            <h1 className='text-left font-semibold text-button-color text-4xl p-2'>Our Content Is Different Because We Set the Bar Higher</h1>
            <p className='text-left text-gray-800 p-2'>As a leader in digital health publishing for more than 25 years, WebMD strives to maintain the most comprehensive and reliable source of health and medical information on the internet.</p>
            <p className='text-left text-gray-800 p-2'>We recognize the responsibility that comes along with being the most well-known and trusted health information platform — and we take that responsibility seriously by:</p>
            <div className='flex p-2 text-center items-center justify-center'>
              <h1 className='text-4xl text-button-color font-bold'>01</h1>
              <p className='text-left text-gray-800 p-2 ml-2'>Charging our content creators to practice <strong>journalistic principles</strong> of excellence and provide objective, accurate, and balanced reporting</p>
            </div>
            <div className='flex p-2 text-center items-center justify-center'>
              <h1 className='text-4xl text-button-color font-bold'>02</h1>
              <p className='text-left text-gray-800 p-2 ml-2'>Maintaining <strong> editorial independence </strong> and transparency into how we protect the integrity of our content</p>
            </div>
            <div className='flex p-2 text-center items-center justify-center'>
              <h1 className='text-4xl text-button-color font-bold'>03</h1>
              <p className='text-left text-gray-800 p-2 ml-2'>Regularly reviewing and updating our content by working with our network of <strong> more than 100 doctors and health experts </strong></p>
            </div>
            <div className='flex p-2'>
              <div className='text-blue-500 mt-5'><AiOutlineArrowRight/></div>
              <a href='https://www.webmd.com/about-webmd-policies/default.htm'><p className='text-button-color m-4'>Learn more about our Editorial Process</p></a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <section>
        <div className='flex grid grid-cols-2 gap-6 mb-10'>
          <div className='flex flex-col items-center text-center justify-center px-12 py-6 bg-white rounded-md'>
            <h1 className='text-2xl text-gray-800'>Follow WebMD on Social Media</h1>
            <div className='flex grid grid-cols-4 gap-10 text-button-color mt-6'>
              <a href='https://www.facebook.com/WebMD/'><FaFacebookF size={30}/></a>
              <FaTwitter size={30}/>
              <FaInstagram size={30}/>
              <FaTiktok size={30}/>
            </div>
          </div>
          <div className='flex flex-col items-center text-center justify-center px-12 py-6 bg-white rounded-md'>
            <h1 className='text-2xl text-gray-800'>Download WebMD App</h1>
            <div className='flex grid grid-cols-2 gap-10  mt-6'>
              <img src={AppStore} alt='Download on the Apple App Store' />
              <img src={GooglePlay} alt='Get it on Google Play' />
            </div>
          </div>
        </div>
      </section>

      {/* More From WebMD */}
      <section className=''>
        <div className='title-and-link flex flex-row justify-between border-b border-gray-300 pb-4 mb-20'>
            <h1 className='mt-8 text-left text-nav-bg-color pl-10 text-3xl font-bold'>More From WebMD</h1>
        </div>
        <div className='flex flex-wrap items-start gap-y-8 gap-x-4 ml-8 mb-20'>
          <li className='bg-list-color list-none rounded-full py-2 px-4  hover:bg-button-color'>
            <a className='text-nav-bg-color hover:text-white' href='https://www.webmd.com/breast-cancer/cm/metastatic-bc-myths'>Facts About Breast Cancer</a>
          </li>
          {/*The list keeps changing upon each refresh, so I just did the designs of 1 link */}
          <li className='bg-list-color list-none rounded-full py-2 px-4'>
            <a className='text-nav-bg-color' href='https://www.webmd.com/lung/covid-omicron-variant#1'>Omicron Variant</a>
          </li>
          <li className='bg-list-color list-none rounded-full py-2 px-4'>
            <a className='text-nav-bg-color' href='https://www.webmd.com/lung/what-is-long-covid-pasc#1'>Long COVID</a>
          </li>
          <li className='bg-list-color list-none rounded-full py-2 px-4'>
            <a className='text-nav-bg-color' href='https://www.webmd.com/lung/rsv-in-babies'>RSV In Children</a>
          </li>
          <li className='bg-list-color list-none rounded-full py-2 px-4'>
            <a className='text-nav-bg-color' href='https://www.webmd.com/a-to-z-guides/what-to-know-about-volcanic-eruption-safety'>Volcanic Eruptions</a>
          </li>
          <li className='bg-list-color list-none rounded-full py-2 px-4'>
            <a className='text-nav-bg-color' href='https://www.webmd.com/cold-and-flu/antimicrobial-resistance-what-to-know'>Antimicrobial Resistance</a>
          </li>
          <li className='bg-list-color list-none rounded-full py-2 px-4'>
            <a className='text-nav-bg-color' href='https://www.webmd.com/dvt/blood-clots'>Blood Clots</a>
          </li>
          <li className='bg-list-color list-none rounded-full py-2 px-4'>
            <a className='text-nav-bg-color' href='https://www.webmd.com/first-aid/how-to-respond-to-an-active-shooter'>Active Shooter</a>
          </li>
          <li className='bg-list-color list-none rounded-full py-2 px-4'>
            <a className='text-nav-bg-color' href='https://www.webmd.com/mental-health/addiction/what-are-whippets'>Whippets</a>
          </li>
          <li className='bg-list-color list-none rounded-full py-2 px-4'>
            <a className='text-nav-bg-color' href='https://www.webmd.com/mental-health/health-effects-antisemitism'>Antisemitism</a>
          </li>
        </div>
      </section>

      <Footer />


    </div>
  );
}

export default Home;