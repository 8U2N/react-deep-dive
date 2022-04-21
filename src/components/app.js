import React, { Component } from 'react';
import JournalList, { JournalWords } from './journals/journal_list'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>React Prompts and State Deep Dive</h1>
        <JournalList heading="List 1" />
        <JournalList heading="List 2" />
        <JournalList heading="List 3" />
        <JournalList heading="List 4" />
        <JournalWords />
      </div>
    );
  }
}
