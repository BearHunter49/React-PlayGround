import * as React from 'react';
import {Dispatch, SetStateAction} from "react";
import { KMentionSuggestionsEntryProps } from './KMention';


export const KMentionDefaultSuggestionsEntry = ({suggestion, searchValue, isFocused}: KMentionSuggestionsEntryProps) => {
    return (
        <div style={{display: "flex"}}>
            <div>{suggestion.id}</div>
            <div>{suggestion.name}</div>
        </div>
    );
};