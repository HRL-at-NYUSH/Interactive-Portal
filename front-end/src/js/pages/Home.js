import React from 'react';
import { facultyMembers, landingCover } from '../../data/homePageResources';

function Home() {
  return (
    <div>
      {/* -mx-72 is to counter the container's width to make image fullscreen*/}
      {/* -mt-32 is to counter the header's height to make image fullscreen*/}
      <section
        className='bg-cover bg-center px-32 py-56
        -mx-72 -mt-32 
        '
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.4),
           rgba(255,255,255,0.4)), 
           url(${landingCover})`,
        }}
      >
        {/* text block has to counter the margin back again */}
        <div className='mx-56 sm:mx-64 lg:mx-72'>
          <div className='font-bold italic text-3xl leading-10 mb-4 '>
            What is HRL?
          </div>
          <p className='text-lg'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </section>

      <section className='-mx-16 sm:mx-0 px-32 py-16'>
        <div className='text-center font-bold italic text-3xl leading-10 mb-16'>
          Courses & Highlights
        </div>
        <div className='flex w-full justify-evenly'>
          <div className='w-72 text-lg'>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </div>
          <div className='w-72 text-lg'>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </div>
        </div>
      </section>

      <section className='-mx-16 sm:mx-0 px-32 py-16'>
        <div className='text-center font-bold italic text-3xl leading-10 mb-16'>
          Faculty & Teaching Staff
        </div>
        <div className='flex w-full justify-evenly'>
          {facultyMembers.map((member) => {
            return (
              <div key={'member-' + member.name} className='w-72 text-lg'>
                <img
                  src={member.image}
                  className='w-48 h-48 object-cover rounded-full m-auto'
                  alt='headshot1'
                ></img>
                <div className='mt-8 text-center'>
                  <div className='font-bold italic text-2xl leading-10 mb-'>
                    {member.name}
                  </div>
                  <p1>{member.description}</p1>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className='-mx-16 sm:mx-0 px-32 py-16'>
        <div className='text-center'>copyright@2021</div>
      </section>
    </div>
  );
}
export default Home;
