import Tabs from './components/Tabs';
import React from 'react';
import Popup from 'reactjs-popup';

const titleCase = (string) => {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
};

const data = {
  user: {
    name: 'Adam Smith',
  },
  sessionHistory: [
    {
      date: '2020-10-24',
      tabs: [{ name: 'time' }, { name: 'distribution' }],
      note: 'Birthplace - Women',
    },
    {
      date: '2020-10-25',
      tabs: [{ name: 'time' }, { name: 'distribution' }],
      note: 'Birthplace - Women + Men',
    },
    {
      date: '2020-10-27',
      tabs: [{ name: 'time' }, { name: 'distribution' }],
      note: 'Birthplace - Women + Men（Playground)',
    },
    {
      date: '2020-10-30',
      tabs: [{ name: 'time' }, { name: 'distribution' }],
      note: 'Birthplace & Literacy - Women + Men',
    },
  ],
  savedCharts: [
    { title: 'Chart Title #1' },
    { title: 'Chart Title #2' },
    { title: 'Chart Title #3' },
    { title: 'Chart Title #4' },
    { title: 'Chart Title #5' },
    { title: 'Chart Title #6' },
    { title: 'Chart Title #7' },
  ],
};

const Profile = ({ match }) => {
  console.log(match);
  return (
    <>
      <h2 className='m-4 text-4xl text-center font-medium leading-10'>
        Profile
      </h2>
      <div className='border '>
        <Tabs>
          <div label='Preferences'>
            <div className='grid grid-cols-1 divide-y divide-gray-200'>
              <section className='p-4'>
                <div className='text-xl'>Profile</div>
                <div className='text-base'>
                  Welcome, <b>{data.user.name}</b>!
                </div>
              </section>
              <section className='p-4'>
                <div className='text-xl'>Email</div>
                <button className='px-4 py-1 border-2 rounded-lg bg-gray-200 hover:bg-gray-400'>
                  Change Your Email
                </button>
                <div className='text-xl'>Password</div>
                <button className='px-4 py-1 border-2 rounded-lg bg-gray-200 hover:bg-gray-400'>
                  Change Your Password
                </button>
              </section>
              <section className='p-4'>
                <div className='text-xl'>Accessibility</div>
                <div>
                  <button className='px-4 py-1 border-2 rounded-lg bg-gray-200 hover:bg-gray-400'>
                    Toggle High Contrast Display
                  </button>
                </div>
              </section>
            </div>
          </div>

          {/* Session History tab content */}
          <div label='Session History'>
            <table className='min-w-max w-full table-auto'>
              <thead>
                <tr className='bg-gray-200 text-gray-600 uppercase text-sm leading-normal'>
                  <th className='py-3 px-6 text-center'>Date</th>
                  <th className='py-3 px-6 text-center'>Tabs</th>
                  <th className='py-3 px-6 text-center'>Note</th>
                  <th className='py-3 px-6 text-center'>Action</th>
                </tr>
              </thead>

              <tbody className='text-gray-600 text-sm font-semibold'>
                {data.sessionHistory
                  // sort the history in descending order
                  .sort((a, b) => new Date(b.date) - new Date(a.date))
                  .map((session, i) => (
                    <tr
                      key={`session-${i}`}
                      className=' border-b border-gray-200 hover:bg-gray-100'
                    >
                      <td className='py-3 px-6 text-center'>{session.date}</td>
                      <td className='py-3 px-6 text-center'>
                        {session.tabs.length}
                      </td>
                      <td className='py-3 px-6 text-center'>{session.note}</td>
                      <td className='py-3 px-6 text-center'>
                        <Popup
                          trigger={
                            <button className='px-4 py-1 border-2 rounded-lg bg-gray-200 hover:bg-gray-400'>
                              Retrieve
                            </button>
                          }
                          modal
                        >
                          <div className='rounded-lg p-6 bg-gray-300 bg-opacity-80'>
                            <p>Restore session history from {session.date}?</p>
                            <p>This session includes:</p>
                            <ul className='pl-3 font-bold'>
                              {session.tabs.map((tab) => (
                                <li key={tab.name}>
                                  {titleCase(tab.name)} Tab
                                </li>
                              ))}
                              <li>Note: {session.note}</li>
                            </ul>

                            <div className='mt-3 text-right'>
                              <button className='px-4 py-1 border-2 rounded-lg bg-gray-300 hover:bg-gray-500'>
                                Cancel
                              </button>{' '}
                              <button className='px-4 py-1 border-2 rounded-lg bg-blue-300 hover:bg-blue-500'>
                                Restore
                              </button>
                            </div>
                          </div>
                        </Popup>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          {/* Saved Charts tab content */}
          <div label='Saved Charts'>
            <div className=' flex flex-wrap justify-between'>
              {data.savedCharts.map((chart, i) => (
                <Popup
                  key={i}
                  trigger={
                    <div
                      key={`chart${i}`}
                      className='group flex w-60 h-40 m-4 border-2 border-gray-800 cursor-pointer bg-blue-200 hover:bg-blue-400'
                    >
                      <div className='m-auto text-transparent group-hover:text-black'>
                        {chart.title}
                      </div>
                    </div>
                  }
                  modal
                >
                  <div className='rounded-lg p-6 bg-gray-300 bg-opacity-80'>
                    <p>Would you like to open {chart.title}?</p>
                    <section>
                      <input
                        type='radio'
                        id='visualize-tab'
                        name='open-chart-tab'
                        value='visualize-tab'
                        checked
                      ></input>
                      <label for='visualize-tab'>
                        Open in new Visualize tab
                      </label>
                      <br />
                      <input
                        type='radio'
                        id='existing-tab'
                        name='open-chart-tab'
                        value='existing-tab'
                      ></input>
                      <label for='existing-tab'>
                        Add to existing tab:{' '}
                        <select name='existing-tabs' id='existing-tab-select'>
                          <option value='tab1'>Tab #1</option>
                          <option value='tab2'>Tab #2</option>
                          <option value='tab3'>Tab #3</option>
                          <option value='tab4'>Tab #4</option>
                          <option value='tab5'>Tab #5</option>
                        </select>
                      </label>
                    </section>
                    {/* <ul style={{ 'font-weight': 'bold' }}>
                              {session.tabs.map((tab) => (
                                <li>{titleCase(tab.name)} Tab</li>
                              ))}
                              <li>Note: {session.note}</li>
                            </ul> */}

                    <div className='mt-3 text-right'>
                      <button className='px-4 py-1 border-2 rounded-lg bg-gray-300 hover:bg-gray-500'>
                        Cancel
                      </button>{' '}
                      <button className='px-4 py-1 border-2 rounded-lg bg-blue-300 hover:bg-blue-500'>
                        Restore
                      </button>
                    </div>
                  </div>
                </Popup>
              ))}
            </div>
          </div>
        </Tabs>
      </div>
    </>
  );
};

export default Profile;
