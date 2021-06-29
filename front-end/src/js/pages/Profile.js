import React from 'react';
import '../../css/pages/Profile.css';
import Tabs from '../components/Tabs';
import Popup from 'reactjs-popup';
import { titleCase } from '../../utils';

const Profile = () => {
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

  return (
    <>
      <div className='home'>
        <h2 className='header-text'>Profile page </h2>
        <div className='block'>
          <Tabs>
            <div label='Preferences'>
              <section>
                <h2>Profile</h2>
                <p>
                  Welcome, <b>{data.user.name}</b>!
                </p>
              </section>
              <section>
                <h4>Email</h4>
                <button>Change Your Email</button>
                <h4>Password</h4>
                <button>Change Your Password</button>
              </section>
              <section>
                <h4>Accessibility</h4>
                <div>
                  <button>Toggle High Contrast Display</button>
                </div>
              </section>
            </div>

            {/* Session History tab content */}
            <div label='Session History'>
              <table>
                <tr>
                  <th>Date</th>
                  <th>Tabs</th>
                  <th>Note</th>
                  <th>Action</th>
                </tr>
                {data.sessionHistory
                  // sort the history in descending order
                  .sort((a, b) => new Date(b.date) - new Date(a.date))
                  .map((session, i) => (
                    <tr key={`session-${i}`}>
                      <td>{session.date}</td>
                      <td>{session.tabs.length}</td>
                      <td>{session.note}</td>
                      <td>
                        <Popup trigger={<button>Retrieve</button>} modal>
                          <div className='pop-up-modal'>
                            <p>Restore session history from {session.date}?</p>
                            <p>This session includes:</p>
                            <ul style={{ 'font-weight': 'bold' }}>
                              {session.tabs.map((tab) => (
                                <li>{titleCase(tab.name)} Tab</li>
                              ))}
                              <li>Note: {session.note}</li>
                            </ul>

                            <div
                              style={{ marginTop: '1em', textAlign: 'right' }}
                            >
                              <button>Cancel</button>
                              <button style={{ background: '#B7E6FF' }}>
                                Restore
                              </button>
                            </div>
                          </div>
                        </Popup>
                      </td>
                    </tr>
                  ))}
              </table>
            </div>

            {/* Saved Charts tab content */}
            <div label='Saved Charts'>
              <div className='chart-container'>
                {data.savedCharts.map((chart, i) => (
                  <Popup
                    trigger={
                      <div key={`chart${i}`} className='chart-element'>
                        <p className='chart-hover'>{chart.title}</p>
                      </div>
                    }
                    modal
                  >
                    <div className='pop-up-modal'>
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

                      <div style={{ marginTop: '1em', textAlign: 'right' }}>
                        <button>Cancel</button>
                        <button style={{ background: '#B7E6FF' }}>Open</button>
                      </div>
                    </div>
                  </Popup>
                ))}
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Profile;
