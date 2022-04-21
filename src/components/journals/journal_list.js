import React, { Component } from 'react';
import { JournalEntry } from "./journal_entry";

const rawJournalData = [
    { title: "Post One", content: "Post Content", status: "draft" },
    { title: "Post One", content: "Post Content", status: "published" },
    { title: "Post One", content: "Post Content", status: "published" },
    { title: "Post One", content: "Post Content", status: "published" }
];

// Class component
export default class JournalList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            journalData: rawJournalData,
            greeting: 'Hi there',
            isOpen: true
        };
    }
    render() {
        return (
            <div>
                <h2>{this.props.heading}</h2>
                <JournalEntry title="A Title" content="Some content" />
                <JournalEntry title="Another Title" content="Some Post" />
                <JournalEntry title="A Title" content="Some content" />
            </div>
        );

    }
}

export class JournalWords extends Component {
    constructor() {
        super()
    }

    render() {
        return(
            <div>
                <h3>Suh, Doo</h3>
            </div>
        );
    }
}