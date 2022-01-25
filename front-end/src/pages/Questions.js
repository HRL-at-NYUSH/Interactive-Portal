import React from 'react';
import FaqTabs from '../components/FaqTabs';
import { HeaderText } from '@components';
import QuestionTabs from '../components/QuestionTabs';

const Questions = () => {
  return (
    <>
      <HeaderText>Frequently Asked Questions page </HeaderText>

      <div className="flex w-full h-screen mt-24">
        <div className="flex w-full h-full">
          <FaqTabs>
          {/* ALL FAQ tab content */}
          <div label='ALL FAQs'>
            <div className='grid grid-cols-1 divide-y divide-gray-100'>
              <div className='w-full mx-6 divide-y divide-gray-500'>
                <div></div>
                <QuestionTabs
                  question={"What is Humanities Research Lab?"}
                  answer={"History Beyond gives undergraduate students experiences in undertaking independent historical research. The course encourages students to think creatively and boldly, to negotiate past difficulties in collaboration, and to learn from setbacks."}
                />

                <QuestionTabs
                  question={"What variables are included in the U.S. Census?"}
                  answer={"History Beyond gives undergraduate students experiences in undertaking independent historical research. The course encourages students to think creatively and boldly, to negotiate past difficulties in collaboration, and to learn from setbacks."}
                />

                <QuestionTabs
                  question={"What is the purpose of the graph insights function?"}
                  answer={"History Beyond gives undergraduate students experiences in undertaking independent historical research. The course encourages students to think creatively and boldly, to negotiate past difficulties in collaboration, and to learn from setbacks."}
                />

                <QuestionTabs
                  question={"How can I access previous projects?"}
                  answer={"History Beyond gives undergraduate students experiences in undertaking independent historical research. The course encourages students to think creatively and boldly, to negotiate past difficulties in collaboration, and to learn from setbacks."}
                />

                <QuestionTabs
                  question={"Can I change my graph type after submitting my data?"}
                  answer={"History Beyond gives undergraduate students experiences in undertaking independent historical research. The course encourages students to think creatively and boldly, to negotiate past difficulties in collaboration, and to learn from setbacks."}
                />

                <QuestionTabs
                  question={"What types of graphs can I create in the portal?"}
                  answer={"History Beyond gives undergraduate students experiences in undertaking independent historical research. The course encourages students to think creatively and boldly, to negotiate past difficulties in collaboration, and to learn from setbacks."}
                />
                <div></div>
              </div>
            </div>
          </div>

          {/* GRAPH CREATION tab content */}
          <div label='GRAPH CREATION'>
          <div className='grid grid-cols-1 divide-y divide-gray-100'>
              <div className='w-full mx-6 divide-y divide-gray-500'>
                <div></div>
                <QuestionTabs
                  question={"How can I create a histogram?"}
                  answer={"History Beyond gives undergraduate students experiences in undertaking independent historical research. The course encourages students to think creatively and boldly, to negotiate past difficulties in collaboration, and to learn from setbacks."}
                />

                <QuestionTabs
                  question={"Can I change my graph type after submitting my data?"}
                  answer={"Yes, user can click on the graph setting button to select a new graph type."}
                />

                <QuestionTabs
                  question={"What types of graphs can I create in the portal?"}
                  answer={"History Beyond gives undergraduate students experiences in undertaking independent historical research. The course encourages students to think creatively and boldly, to negotiate past difficulties in collaboration, and to learn from setbacks."}
                />

                <QuestionTabs
                  question={"How can I access previous projects?"}
                  answer={"History Beyond gives undergraduate students experiences in undertaking independent historical research. The course encourages students to think creatively and boldly, to negotiate past difficulties in collaboration, and to learn from setbacks."}
                />

                <QuestionTabs
                  question={"Can I use multiple datasets in a single graph?"}
                  answer={"History Beyond gives undergraduate students experiences in undertaking independent historical research. The course encourages students to think creatively and boldly, to negotiate past difficulties in collaboration, and to learn from setbacks."}
                />
                <div></div>
              </div>
            </div>
          </div>

          {/* VARIABLES tab content */}
          <div label='VARIABLES'>
          <div className='grid grid-cols-1 divide-y divide-gray-100'>
              <div className='w-full mx-6 divide-y divide-gray-500'>
                <div></div>
                <QuestionTabs
                  question={"What is Humanities Research Lab?"}
                  answer={"History Beyond gives undergraduate students experiences in undertaking independent historical research. The course encourages students to think creatively and boldly, to negotiate past difficulties in collaboration, and to learn from setbacks."}
                />

                <QuestionTabs
                  question={"What variables are included in the U.S. Census?"}
                  answer={"History Beyond gives undergraduate students experiences in undertaking independent historical research. The course encourages students to think creatively and boldly, to negotiate past difficulties in collaboration, and to learn from setbacks."}
                />

                <QuestionTabs
                  question={"What is the purpose of the graph insights function?"}
                  answer={"History Beyond gives undergraduate students experiences in undertaking independent historical research. The course encourages students to think creatively and boldly, to negotiate past difficulties in collaboration, and to learn from setbacks."}
                />

                <QuestionTabs
                  question={"How can I access previous projects?"}
                  answer={"History Beyond gives undergraduate students experiences in undertaking independent historical research. The course encourages students to think creatively and boldly, to negotiate past difficulties in collaboration, and to learn from setbacks."}
                />
                <div></div>
              </div>
            </div>
          </div>

          {/* GRAPH INSIGHTS tab content */}
          <div label='GRAPH INSIGHTS'>
          <div className='grid grid-cols-1 divide-y divide-gray-100'>
              <div className='w-full mx-6 divide-y divide-gray-500'>
                <div></div>
                <QuestionTabs
                  question={"What is the purpose of the graph insights function?"}
                  answer={"History Beyond gives undergraduate students experiences in undertaking independent historical research. The course encourages students to think creatively and boldly, to negotiate past difficulties in collaboration, and to learn from setbacks."}
                />

                <QuestionTabs
                  question={"How can I access previous projects?"}
                  answer={"History Beyond gives undergraduate students experiences in undertaking independent historical research. The course encourages students to think creatively and boldly, to negotiate past difficulties in collaboration, and to learn from setbacks."}
                />

                <QuestionTabs
                  question={"Can I change my graph type after submitting my data?"}
                  answer={"History Beyond gives undergraduate students experiences in undertaking independent historical research. The course encourages students to think creatively and boldly, to negotiate past difficulties in collaboration, and to learn from setbacks."}
                />

                <QuestionTabs
                  question={"What types of graphs can I create in the portal?"}
                  answer={"History Beyond gives undergraduate students experiences in undertaking independent historical research. The course encourages students to think creatively and boldly, to negotiate past difficulties in collaboration, and to learn from setbacks."}
                />
                <div></div>
              </div>
            </div>
          </div>


          {/* US CENSUS tab content */}
          <div label='U.S. CENSUS'>
          <div className='grid grid-cols-1 divide-y divide-gray-100'>
              <div className='w-full mx-6 divide-y divide-gray-500'>
                <div></div>
                <QuestionTabs
                  question={"What is Humanities Research Lab?"}
                  answer={"History Beyond gives undergraduate students experiences in undertaking independent historical research. The course encourages students to think creatively and boldly, to negotiate past difficulties in collaboration, and to learn from setbacks."}
                />

                <QuestionTabs
                  question={"What variables are included in the U.S. Census?"}
                  answer={"History Beyond gives undergraduate students experiences in undertaking independent historical research. The course encourages students to think creatively and boldly, to negotiate past difficulties in collaboration, and to learn from setbacks."}
                />

                <QuestionTabs
                  question={"Can I change my graph type after submitting my data?"}
                  answer={"History Beyond gives undergraduate students experiences in undertaking independent historical research. The course encourages students to think creatively and boldly, to negotiate past difficulties in collaboration, and to learn from setbacks."}
                />

                <QuestionTabs
                  question={"What types of graphs can I create in the portal?"}
                  answer={"History Beyond gives undergraduate students experiences in undertaking independent historical research. The course encourages students to think creatively and boldly, to negotiate past difficulties in collaboration, and to learn from setbacks."}
                />
                <div></div>
              </div>
            </div>
          </div>
        </FaqTabs>
        </div>
      </div>
    </>
  );
}

export default Questions;
