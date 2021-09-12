import { teamMembers, highlights, devInfo } from '@data/homePageResources';

// import './Home.css';
import { logo } from '@assets/home-page';

function Home() {
  return (
    <>
      {/* Section #1 - Project Introduction */}
      <section
        className='px-0 flex flex-col lg:flex-row py-32 md:px-16 align-center 
      '
      >
        <div className='p-4 z-10 m-auto lg:p-16'>
          <h1 className='font-serif font-bold text-5xl md:text-6xl leading-snug md:leading-snug mb-4'>
            History beyond the New York City
          </h1>
          <p className='text-2xl'>
            History Beyond gives undergraduate students experiences in
            undertaking independent historical research. The course encourages
            students to think creatively and boldly, to negotiate past
            difficulties in collaboration, and to learn from setbacks.
          </p>
        </div>
        <img src={logo} alt='HRL-logo' className='w-full sm:w-144 m-auto'></img>
      </section>

      {/* Section #2 - HRL */}
      <section className='px-0 md:px-32 py-16'>
        <div className='font-serif font-bold text-5xl text-center md:leading-snug mb-16'>
          What is HRL?
        </div>
        <div className='flex flex-col lg:flex-row w-full justify-evenly'>
          <div className='w-96 text-2xl p-4 m-auto'>
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
          <div className='w-96 text-2xl p-4 m-auto'>
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

      {/* Section #3 */}
      <section className='px-32 py-16'>
        <div className='text-5xl font-serif text-center font-bold md:leading-snug mb-16'>
          Course & Highlights
        </div>
        <div className=' overflow-x-auto'>
          <div className='min-w-max  flex flex-row flex-nowrap '>
            {highlights.map((highlight) => {
              return (
                <div
                  key={'highlight-' + highlight.name}
                  className='w-96 text-lg mx-8 my-6'
                >
                  <img
                    src={highlight.image}
                    className='transition w-full h-72 object-cover m-auto rounded-md hover:shadow-lg'
                    alt='highlight'
                  ></img>
                  <div className='mt-4 text-right'>
                    <div className='font-bold text-2xl leading-10 capitalize'>
                      {highlight.title}
                    </div>
                    <p className='text-lg'>{highlight.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section #4 */}
      <section className='px-0 md:px-32 py-16'>
        <div className='font-serif font-bold text-5xl text-center md:leading-snug mb-16'>
          Development & Information
        </div>
        <div className='flex flex-wrap flex-row justify-center'>
          {devInfo.map((item) => {
            return (
              <div key={'member-' + item.title} className='text-lg m-auto'>
                <img
                  src={item.image}
                  className='w-48 h-48 object-cover rounded-full m-auto'
                  alt='item'
                ></img>
                <div className='mt-8 text-center'>
                  <div className='font-bold text-2xl leading-10 mb-'>
                    {item.number}
                  </div>
                  <p className='text-lg uppercase'>{item.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section #5 */}
      <section className='px-0 md:px-32 py-16'>
        <div className='font-serif font-bold text-5xl text-center md:leading-snug mb-16'>
          Team Members
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {teamMembers.map((member) => {
            return (
              <div key={'member-' + member.name} className='text-lg m-auto'>
                <img
                  src={member.image}
                  className='w-48 h-48 object-cover rounded-full m-auto'
                  alt='headshot'
                ></img>
                <div className='mt-8 text-center'>
                  <div className='font-bold text-2xl leading-10 mb-'>
                    {member.name}
                  </div>
                  <p className='text-lg'>{member.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Home;
