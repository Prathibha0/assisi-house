import React from 'react';
import CarouselItem from './CarouselItem';

const categories = [
  {
    title: 'Board & Committees',
    description:
      'The Assisi House Board is made up of individuals with knowledge in finance, fundraising, real estate, organizational management, HR, and social services. Joining the board or any of its committees allows dedicated volunteers to participate in the overall function of the organization.',
    buttonText: 'Interested in board membership? Click Here',
    backgroundColor: '#FFD700', // Light yellow

  },
  {
    title: 'Accompaniment',
    description:
      'Accompaniment is individually tailored to meet the needs of residents. Needs might include helping a resident with their resume, their finances or running errands. Accompaniment can also mean simply spending time with a resident that needs a listening ear.',
    buttonText: 'Learn More About Accompaniment',
    backgroundColor: '#87CEEB', // Sky blue

  },

  {
    title : 'Construction/Housing Maintenance',
    description:
    'Assisi Houses need renovation prior to opening and during transition to permanent residence. The houses also need maintenance which can include appliance installation, painting, installing floors and more. This is a great opportunity for individuals with a background in construction or maintenance.',
     backgroundColor :  '#AEED28',
  },
  {
    title : 'Property Search',
    description : 'Assisi House is always on the lookout for properties that can be utilized for the Assisi House mission and model. We are in need of volunteers that are interested in being a part of the property search and inquiry process.',
    backgroundColor:'#FFD700',
  },

  {
    title : 'Fundraising',
    description : 'Fundraising for Assisi House includes organizing events, soliciting for donations, and grant writing. Volunteers with any of these skills are vital to our organization.',
    backgroundColor:'#28EDE1'
  },
  {
    title : 'Driver',
    description :'Assisi House residents occasionally need rides to appointments. Occasionally driving residents is a great way to get to know them. Further, volunteers with trucks are always needed to move furniture, appliances or other large items for the houses.',
    backgroundColor:'#D3A7D6'
  }
  // Add more category objects as needed
];

function Carousel() {
  return (
    <div className="carousel-container">
      {categories.map((category, index) => (
        <CarouselItem key={index} category={category} />
      ))}
    </div>
  );
}

export default Carousel;
