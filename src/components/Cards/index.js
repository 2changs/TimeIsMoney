import React, {Component} from "react";
import Swipeable from "react-swipy"
import './Cards.css';
import { db } from '../../firebase';
import TinderCard from "../TinderCard/";
import carddata from './dummy';
 
class Cards extends Component {
  state = {
    cards: [{
  "cat" : "Education",
  "desc" : "Your professional skills can help small businesses grow and create jobs. Volunteer as a mentor on MicroMentor.org and make a meaningful connection with a business owner. Mentors join, search for entrepreneurs to assist online, and once connected, serve as a coach and trusted guide.",
  "distance" : "0.1 mi",
  "img" : "https://www.volunteermatch.org/images/gallery/7054F845-71C3-00E9-372F-59C2B073EBEA_m?ts=1373933831000",
  "title" : "Share your knowledge with a small business owner"
}, {
  "cat" : "Community",
  "desc" : "We are looking for volunteers to help cook a community meal for our international guests at HI Richmond.  Community meals are a great way to bring people together from various backgrounds and parts of the world to learn about one another.  Volunteers are responsible for cooking and serving meal, facilitating conversation between guests and cleaning up.",
  "distance" : "0.8 mi",
  "img" : "https://www.volunteermatch.org/images/gallery/D9BDF88C-AB33-B807-B7B5-A1B3F7A3DC78_m?ts=1511383907000",
  "title" : "Bring Travelers Together by Hosting Community Meal at Hostel"
}, {
  "cat" : "International",
  "desc" : "What do you love about Richmond? Whether it’s street art, breweries, food, or the James, we need tour guides to lead walking tours for the downtown Richmond area. You’ll get the chance to meet and lead a group of travelers from all over the world, and they need you to show them why everyone loves RVA! Times and dates are negotiable, so let us know when you’re free and what you love! We’re happy to work with passionate people!",
  "distance" : ".8 mi",
  "img" : "https://www.volunteermatch.org/images/gallery/D503B7D6-2E0F-5345-404A-ABAF7D2D4633_m?ts=1443734957000",
  "title" : "Help Lead Tours for Travelers visiting Richmond"
}, {
  "cat" : "Community",
  "desc" : "Trained to provide support and socialization through telephone checks-ins to make sure a senior is okay. TeleBridges volunteers will not solve problems, but will provide a listening ear.",
  "distance" : "0.7 mi",
  "img" : "https://upload.wikimedia.org/wikipedia/commons/c/cf/Live_Student_Chat_with_International_Space_Station.jpg",
  "title" : "TeleBridges Volunteer"
}, {
  "cat" : "Animals",
  "desc" : "Fostering abandoned and rescued dogs and puppies is a wonderful and fulfilling experience! As a foster, you will be giving a second chance to a poor dog who has no one to advocate for them except kind hearted people like you! These dogs are saved from high kill shelters with limited resources who are unable to care for the number of animals that are abandoned at their doors. There is great satisfaction in knowing that you are saving a life!",
  "distance" : "1.2 mi",
  "img" : "https://www.volunteermatch.org/images/gallery/5D4DCB50-4336-07C3-939A-EF5049B9502F_m?ts=1465527371000",
  "title" : "Foster a Dog with Operation Paws for Homes!"
}, {
  "cat" : "International",
  "desc" : "Do you love to travel? Want to connect internationally / interculturally on a local level? We are looking for individuals who want to connect with foreign exchange students and their host families by being volunteer liaisons for AFS-USA. Volunteer liaisons champion a student and host family and ensure the cultural exchange is a success! This will be done by using your great communication skills and your intercultural experience gained from traveling overseas. For more detailed information contact Alexandra: aklaff@afsusa.org, or by visiting http://www.afsusa.org/volunteer-with-afs/",
  "distance" : "1.3 mi",
  "img" : "https://www.vcu.edu/media/vcu/assets/images/life-at-vcu/all-about-richmond/slideshows/annual-events/061014_062_jw_sr_1800x1000_opt.jpg",
  "title" : "TURN YOUR LOVE OF TRAVEL AND CULTURE INTO AN OPPORTUNITY TO HELP OTHERS! Richmond Area"
}, {
  "cat" : "Seniors",
  "desc" : "The Alzheimer's Association of Greater Richmond is looking for volunteers to help us with our newest national signature event, The Longest Day. You are invited to join The Longest Day Volunteer Committee where you will play a vital role in team recruitment and cultivation, as well as marketing and promoting the event throughout our chapter territory.",
  "distance" : "1.6 mi",
  "img" : "https://res.cloudinary.com/dktp1ybbx/image/upload/c_limit,h_180,w_180/f_auto,fl_lossy,q_auto/v1536066629/organization/prod/67890/nZ9QWAXtnJ.jpg",
  "title" : "Help to end Alzheimer’s on the Summer Solstice: Join the Longest Day Planning Committee!"
}, {
  "cat" : "Seniors",
  "desc" : "The ALS Association - DC/MD/VA Chapter is looking for a national anthem singer for the Richmond Walk to Defeat ALS. Our opening ceremony begins at 10:00AM and you will be preforming shortly after that. We will also have a color guard at this time to present the flag. If you are interested, please submit a video of yourself singing to tbrett@alsinfo.org.",
  "distance" : "1.3 mi",
  "img" : "https://www.volunteermatch.org/images/gallery/BCF6A8F5-4BDB-5F65-E9C2-6C25783783F0_m?ts=1459265277000",
  "title" : "National Anthem Singer"
}, {
  "cat" : "Women",
  "desc" : "As a Girl Scout volunteer, you’ll introduce girls to new experiences that show them they’re capable of more than they ever imagined. You’ll be their cheerleader, their guide, and the mentor that shows them that anything is possible. The memories you’ll share will last long after the meeting is over. Start today.",
  "distance" : "7.8 mi",
  "img" : "https://www.volunteermatch.org/images/gallery/988D1505-DDDC-F6A5-E438-179827413CAB_m?ts=1416956757000",
  "title" : "Be the Role Model She'll Always Remember"
}, {
  "cat" : "Disaster Relief",
  "desc" : "CitiIMPACT Ministries, an international missions organization, has openings for various positions at local, regional and national levels.  You could be one we need!  Do you sense God calling you to something new? Perhaps you are in a position that is not fulfilling and you'd like to explore using your gifts and talents in ways that will make a Kingdom difference.  Or.. Are you reaching retirement age ...",
  "distance" : "1.3 mi",
  "img" : "https://www.volunteermatch.org/images/gallery/FD311E45-D8A0-3802-E789-79C694DB35CE_m?ts=1453828976000",
  "title" : "Regional Director-Richmond Virginia"
}, {
  "cat" : "Education",
  "desc" : "The Valentine's education department needs some assistance! We are looking for a volunteer who can help with preparing supplies for our awesome student programs. Hours are flexible, but should be during the work week.",
  "distance" : "1.7 miles",
  "img" : "https://res.cloudinary.com/dktp1ybbx/image/upload/c_limit,h_180,w_180/f_auto,fl_lossy,q_auto/v1533316259/organization/prod/7581/3J0FvpeVny.jpg",
  "title" : " Education Center Volunteer"
}, {
  "cat" : "Community",
  "desc" : "For this night, we need a few volunteers to help with set up, registration, social media booth, directing people during the event and floaters.",
  "distance" : "1.2 miles",
  "img" : "https://www.volunteermatch.org/images/gallery/F4247B61-3E56-85B3-AE0A-E97C402A3E65_m?ts=1474642100000",
  "title" : "Awards Reception - Volunteer!"
}, {
  "cat" : "Children & Youth",
  "desc" : "The Ronald McDonald House Charities provides support services for families with critically ill children who are being treated at Richmond-area hospitals. Through a partnership with VCU Health, the Happy Wheels cart provides age-appropriate activities and items to families at the Children's Hospital of Richmond at VCU. Volunteers help relieve families' stress and improve their days by providing small comforts that go a long way.",
  "distance" : "1.7 mi",
  "img" : "https://www.volunteermatch.org/images/gallery/9394D875-5CB8-6112-7CB4-CEB7894E0B2D_m?ts=1504638566000",
  "title" : "Happy Wheels at VCU Health"
}, {
  "cat" : "Education",
  "desc" : "Your professional skills can help small businesses grow and create jobs. Volunteer as a mentor on MicroMentor.org and make a meaningful connection with a business owner. Mentors join, search for entrepreneurs to assist online, and once connected, serve as a coach and trusted guide.  This volunteer opportunity is extremely flexible. You set the schedule and the expectations with your mentee. Meanwhile, our support staff is by your side every step of the way to help you succeed as a mentor.  Some entrepreneurs need a sounding board or general industry advice, while others are looking for targeted technical advising.  Put your business skills to good use and help a small business owner today.  Join at MicroMentor.org",
  "distance" : "online",
  "img" : "https://www.volunteermatch.org/images/gallery/7C4D2DDA-4DDE-BCE4-EFD1-49CF416E8918_m?ts=1443217092000",
  "title" : "Share your knowledge with a small business owner"
}, {
  "cat" : "Children & Youth",
  "desc" : "The Ronald McDonald House Charities provides support services for critically ill children and their families. Through a partnership with VCU Health and the Child Development Center, The Ronald McDonald House Sibling Center is located in the Children’s Pavilion at VCU. Parents can check in their well siblings, so they can focus on the care of the patient. Sibling Center volunteers engage the children in fun, age-appropriate activities which helps relieve the family's stress. Sibling Center volunteer shifts occur from 9 a.m. - 12 p.m. and 12 p.m. to 3 p.m. ...",
  "distance" : "1.8 mi",
  "img" : "https://www.volunteermatch.org/images/gallery/098939CD-605C-F1D1-846A-AEFD6E782832_m?ts=1501782352000",
  "title" : "Sibling Center Activity Assistant"
}, {
  "cat " : "International",
  "desc" : "We are looking for volunteers to help cook a community meal for our international guests at HI Richmond. Community meals are a great way to bring people together from various backgrounds and parts of the world to learn about one another. Volunteers are responsible for cooking and serving meal, facilitating conversation between guests and cleaning up.",
  "distance" : "0.5 miles",
  "img" : "https://www.volunteermatch.org/images/gallery/D503B7D6-2E0F-5345-404A-ABAF7D2D4633_m?ts=1443734957000",
  "title" : "Bring Travelers Together by Hosting Community Meal at Hostel"
}, {
  "cat" : "Advocacy & Human Rights",
  "desc" : "Citizens’ Climate Lobby (CCL) wants you! As a volunteer, you’ll be a member of the fastest growing and most effective climate advocacy group. You will work with concerned Virginia citizens to slow the effects of climate change. Let's work together to protect our beautiful ecosystems, livelihoods and way of life. Please respond to our posting for an invitation to learn more.",
  "distance" : "2.2 mi",
  "img" : "https://www.volunteermatch.org/images/gallery/6F462717-7827-3E1A-411A-1D5B66EF70EA_m?ts=1438694340000",
  "title" : "Sustainable Climate Environment Advocate Richmond VA"
}, {
  "cat" : "International",
  "desc" : "What do you love about Richmond? Whether it’s street art, breweries, food, or the James, we need tour guides to lead walking tours for the downtown Richmond area. You’ll get the chance to meet and lead a group of travelers from all over the world, and they need you to show them why everyone loves RVA! Times and dates are negotiable, so let us know when you’re free and what you love! We’re happy to work with passionate people!",
  "distance" : "0.5 miles",
  "img" : "https://www.volunteermatch.org/images/gallery/D503B7D6-2E0F-5345-404A-ABAF7D2D4633_m?ts=1443734957000",
  "title" : " Help Lead Tours for Travelers visiting Richmond"
}, {
  "cat" : "Children & Youth",
  "desc" : "Higher Achievement closes a persistent opportunity gap for middle school students in at-risk communities by providing rigorous afterschool and summer academic support, with a focus on math, literacy, and social justice. Volunteers help prepare Richmond youth to be on the college track by the 8th grade. Half of students who drop out of high school do so right after middle school, during their first year in high school. At Higher Achievement we hope to create lasting change by putting individual students on a path to success during these critical years.",
  "distance" : "4.3 mi",
  "img" : "https://www.volunteermatch.org/images/gallery/737675B5-7C66-E07F-59E2-1ACC1490F479_m?ts=1438100134000",
  "title" : "Academic Mentor for Middle School Students"
}, {
  "cat" : "Seniors",
  "desc" : "Provide budget setup, checkbook balancing, and billpaying services to seniors who remain in control of their finances, but need assistance in keeping things in order. Meets with senior client(s) twice a month to ensure prompt and accurate payment of bills, and establishes a filing system to help with reconciling monthly bank statements with checking account.",
  "distance" : "0.4 miles",
  "img" : "https://www.volunteermatch.org/images/clear.gif",
  "title" : "Money Management Volunteer"
}, {
  "cat" : "Disaster Relief",
  "desc" : "Building Hope is a geat way to postively affect your own community, those impacted by disasters around the USA, and across the world.  Together we build house frames and deliver them to at-risk kids and families in a case-managed process that provides adequate housing to severe situations.",
  "distance" : "3.3 mi",
  "img" : "https://www.volunteermatch.org/images/gallery/460D3EA6-18DF-A3C8-1745-2A5F0E71999F_m?ts=1438612082000",
  "title" : "Building Hope by CitiIMPACT Ministries"
}, {
  "cat" : "Seniors",
  "desc" : "Volunteer provides counseling on Medicare, Medicare Advantage, Medicare Supplemental, and Long-term care insurance through phone hotline and scheduled client visits upon request. Volunteers give public presentations on services to educate the community about the Virginia Insurance Counseling and Assistance (VICAP) program if they are interested.",
  "distance" : "0.4 miles",
  "img" : "https://www.volunteermatch.org/images/clear.gif",
  "title" : "Insurance Counselor"
}, {
  "cat" : "Education",
  "desc" : "MusicLink is in need of experienced music teachers in Viginia. With MusicLink, students (children under 18 years old) who show an interest in taking music lessons, but cannot afford full fee lessons, are linked with qualified music teachers willing to reduce their fee by at least half to make the lessons more affordable. MusicLink teachers are able to take advantage of a variety of offers and discounts from our growing list of Business Partners as well as additional benefits directly from our foundation.",
  "distance" : "0.8 mi",
  "img" : "https://www.volunteermatch.org/images/gallery/540C63E1-164F-0E57-C98E-33E8F12153D9_m?ts=1509658116000",
  "title" : "Music Teachers for Underprivileged Children"
}, {
  "cat" : "Children and Youth",
  "desc" : "Do you love to travel? Want to connect internationally / interculturally on a local level? We are looking for individuals who want to connect with foreign exchange students and their host families by being volunteer liaisons for AFS-USA. Volunteer liaisons champion a student and host family and ensure the cultural exchange is a success! This will be done by using your great communication skills and your intercultural experience gained from traveling overseas. For more detailed information contact Alexandra: aklaff@afsusa.org, or by visiting http://www.afsusa.org/volunteer-with-afs/",
  "distance" : "online",
  "img" : "https://www.volunteermatch.org/images/clear.gif",
  "title " : "TURN YOUR LOVE OF TRAVEL AND CULTURE INTO AN OPPORTUNITY TO HELP OTHERS! Richmond Area"
}, {
  "cat" : "Education",
  "desc" : "Help prepare Richmond youth in underserved neighborhoods to be on the college track by the 8th grade.",
  "distance" : "4.2 mi",
  "img" : "https://www.volunteermatch.org/images/gallery/737675B5-7C66-E07F-59E2-1ACC1490F479_m?ts=1438100134000",
  "title" : "Mentor at Henderson Middle School"
}, {
  "cat" : "Community",
  "desc" : "If you have any availability to assist with this year’s walk we would love to have you! We will be walking to defeat ALS in Richmond, VA on Saturday, October 28th, 2017 from 11:00am-2pm at Brown’s Island. Registration begins at 10 am, however, we are asking any available volunteers to arrive at 7:30AM so we can delegate tasks and explain the details of what volunteers will be helping with the day of.",
  "dist" : "1.3 miles",
  "img" : "https://www.volunteermatch.org/images/gallery/0F8212BD-E30F-7C5F-4F8A-46C30786A385_m?ts=1344959643000",
  "title" : "Richmond Walk to Defeat ALS"
}, {
  "cat" : "Environment",
  "desc" : "Generation 180 is dedicated to driving a cultural shift in energy awareness and advancing the transition to clean energy. The organization is looking for volunteers to support its clean energy campaigns in metro Boston. We are looking for motivated individuals to assist in both forming and leading a new Generation 180 team in your community. ",
  "distance" : "2.3 mi",
  "img" : "https://www.volunteermatch.org/images/gallery/BDB79B92-9558-D07E-7888-092E28B14DD0_m?ts=1509716758000",
  "title" : "Clean Energy Advocacy in Richmond, VA"
}, {
  "cat" : "Community",
  "desc" : "The Richmond National Battlefield Park and the Maggie L. Walker National Historic Site are looking for passionate and personable individuals to volunteer! Our volunteer opportunities are endless, so we can find a position that fits each volunteer interest! Please contact us if you're interested!",
  "distance" : "1.3 miles",
  "img" : "https://www.volunteermatch.org/images/clear.gif",
  "title" : "Richmond National Battlefield Park Volunteer"
}, {
  "cat" : "Children & Youth",
  "desc" : "Please join us for a Thanksgiving celebration with Dawn!",
  "distance" : "5.4 mi",
  "img" : "https://www.volunteermatch.org/images/gallery/41DDF037-8396-CAE4-DF4D-EAEE1953F4CA_m?ts=1521061024000",
  "title" : "Bring JOY and hope to those recovering from abuse and/or neglect"
}, {
  "cat" : "Health and Medicine",
  "desc" : "Help build social connections among older adults and persons with disabilities experiencing isolation and loneliness. This unique one-on-one volunteer experience gives you the opportunity to personally connect, engage and advocate. The commitment is big but the rewards are huge - not just for your older friend but for you as a volunteer as well. Weekly visits are scheduled when it works best for you and your friend",
  "distance" : "2 miles",
  "img" : "https://www.volunteermatch.org/images/gallery/3B44A593-13AC-ACC8-48E7-0D24CF5DD639_m?ts=1320153441000",
  "title" : "Friendly Visitor"
}, {
  "cat" : "Animals",
  "desc" : "We are actively seeking volunteer Puppy Raisers to care for our adorable, purpose-bred dogs during the first eighteen months of their lives. Raisers teach puppies house manners and basic obedience while socializing them to the everyday world, thus laying the foundation for success in guide dog training. Guiding Eyes provides extensive support including weekly obedience classes, free veterinary care and local assistance.",
  "distance" : "1.7 mi",
  "img" : "https://www.volunteermatch.org/images/gallery/D65810B6-E72E-9291-25F3-B60E6BCAC00D_m?ts=1516387313000",
  "title" : "Do something extraordinary – raise a future guide dog in City of Richmond, VA!"
}, {
  "cat" : "Children and Youth",
  "desc " : "Organize a used bike collection in your community. Get your faith community, school, scout troop, service organization, or business to sponsor, publicize, and host a one-day used bike collection in benefit of Bikes for the World. Requires an event site, publicity, and 5-15 volunteers at the event. Bikes for the World will provide guidance, how-to video, tools, receipts, and a destination for the bikes.  Host group is expected to issue receipts, prep (compact) bikes for efficient storage and shipping, and best efforts to obtain from the donor a suggested $10/bike tax-deductible contribution with each bike.",
  "distance" : "online",
  "img" : "https://www.volunteermatch.org/images/gallery/D64EC8E0-2209-6D67-2EB2-E89C6AE0C0CB_m?ts=1373589047000",
  "title " : "Organize a used bike collection in your community "
}, {
  "cat" : "Advocacy & Human Rights",
  "desc" : "Help to organize the city-wide interfaith Family Peace Festival, scheduled for September 2015.  Organize vendors, assist with event logistics, serve on the planning committee, which consists of a large network of faith and peace organizations.",
  "distance" : "3.4 mi",
  "img" : "https://www.volunteermatch.org/images/clear.gif",
  "title" : "Family Peace Festival volunteer"
}, {
  "cat " : "Children and Youth",
  "desc" : "As a Girl Scout volunteer, you’ll introduce girls to new experiences that show them they’re capable of more than they ever imagined. You’ll be their cheerleader, their guide, and the mentor that shows them that anything is possible. The memories you’ll share will last long after the meeting is over. Start today.  When you register for volunteer opportunities with Girl Scouts of the USA or Girl Scout councils, you agree that we can: (i) communicate with you; (ii) email you opportunities; and (iii) share your registration information with GS Councils in your relevant geographic area.",
  "distance" : "online",
  "img" : "https://www.volunteermatch.org/images/gallery/28B9528A-974D-E4FA-3ECC-FBAD3C0DC751_m?ts=1438186656000",
  "title " : "Be the role model she'll always remember"
}, {
  "cat" : "Advocacy & Human Rights",
  "desc" : "Assist with organizing and presenting events for the Richmond Youth Peace Project, an initiative to reduce youth violence and teach conflict resolution skills in the Richmond region.  Events include annual \"Educoncert\" in late January, and an annual Youth Peace Summit in late April, as well as conflict resolution training sessions throughout the year.  Represent RYPP and the Peace Center at various community events and festivals--distributing information and gathering names and contact information of other interested youth and adults.",
  "distance" : "3.4 mi",
  "img" : "https://www.volunteermatch.org/images/clear.gif",
  "title" : "Richmond Youth Peace Project"
}, {
  "cat " : "Community",
  "desc" : "The Peace Party and Auction is the Peace Center's main fundraising event of the year.  We need volunteers for shifts of 2 hours or more ",
  "distance" : "2.9 miles",
  "img" : "https://res.cloudinary.com/dktp1ybbx/image/upload/c_limit,h_180,w_180/f_auto,fl_lossy,q_auto/v1537203793/organization/prod/51493/D9m1fGVKT8.jpg",
  "title" : "Annual Auction Volunteer"
}, {
  "cat" : "Animals",
  "desc" : "Volunteers help maintain exhibits, prepare diets and participate in animal enrichment programs. They train and handle domestic and exotic animals under the direct supervision of full time staff only and care for injured animals under the supervision of the area supervisor. They research data and assist in collection of specimens for display. Volunteers also educate and inform individuals by answering their questions.",
  "distance" : "2.8 mi",
  "img" : "https://www.volunteermatch.org/images/gallery/B7221884-BA0B-DB3B-C4EB-A085E008BAD1_m?ts=1421334522000",
  "title" : "Children's Farm and Nature Center Volunteer"
}, {
  "cat" : "Community",
  "desc" : "We need your help to numerically sort reports. You will use the ID number to sort and then place a binder clip on the sorted reports. The last step is to draft post-it notes to document what is contained within the clip.  You set your own schedule, Monday - Friday, 9am - 3pm, with a minimum increment of two (2) hours. The assignment will last until all the reports have been sorted.",
  "distance" : "4.6 miles",
  "img" : "https://www.volunteermatch.org/images/clear.gif",
  "title" : "Sorting and Recording"
}, {
  "cat" : "Women",
  "desc" : "We find it unacceptable to sit by and do nothing as the children in our local communities are repeatedly abused and neglected day after day. Our role is simple. We tanglibly love these children of abuse. They are easy to find. There are children's homes in every community across our nation... filled with abused children RIGHT NOW who are hurting and alone. We must go to them. Love on them. And let them know they are precious and they matter. Visit chicktime.com to find a chapter in your area. ...",
  "distance" : "1.5 mi",
  "img" : "https://www.volunteermatch.org/images/clear.gif",
  "title" : "Women, don't just be sad about Child Abuse, do something about it right NOW!!!"
}, {
  "cat" : "Children and Youth",
  "desc" : "SHARE! your heart & home with a high school exchange student  Make next school year the most enriching for your family, ever! Volunteers- with or without children at home- are needed to host students, 15 to 18 year old boys and girls, from Germany, Sweden, China, Brazil, Belgium,Italy, Czech Republic, Japan, Ecuador, South Korea, and several other countries. Volunteers are able to review student applications and choose the boy or girl that best matches their family.",
  "distance" : "0 miles",
  "img" : "https://www.volunteermatch.org/images/gallery/17877DAC-EA0D-253A-9DD7-8F3672E34467_m?ts=1242672970000",
  "title " : "Host a High School Exchange Student! "
} ]

  };

  constructor(props) {
    super(props);
    console.log(db.getVols());  
  }
 
  remove = () =>
    this.setState(({cards}) => ({
      cards: cards.slice(1, cards.length),
    }));
 
  render() {
    const {cards} = this.state;
 
    return (
      <div className="Wrapper">
        <div className="Cards">
          {cards.length > 0 ? (
            <div className="Cards">
              <Swipeable
                onAfterSwipe={this.remove}>
                <TinderCard imageUrl={cards[0].img} title={cards[0].title} desc={cards[0].desc} distance={cards[0].distance} cat={cards[0].cat}> </TinderCard>
              </Swipeable>
              {cards.length > 1 && <TinderCard zIndex={-1}>{cards[1]}</TinderCard>}
            </div>
          ) : (
            <TinderCard zIndex={-2} title={"Refresh Cards"}></TinderCard>
          )}
        </div>
      </div>
    );
  }
}
 
export default Cards;