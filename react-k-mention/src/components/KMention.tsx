import * as React from 'react';
import {SendSuggestionClass} from "../SendSuggestionClass";
import {Dispatch, SetStateAction, useRef, useState} from "react";
import {KMentionSuggestionsContainer, KMentionSuggestionsContainerProps} from "./KMentionSuggestionsContainer";


const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/
const english = /[a-z|A-Z]/
const myRegexp = new RegExp(`\\B@[\\w|\\s|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+`, 'ig')

const dummyData = [
    new SendSuggestionClass({
        ownerId: 1,
        ownerName: '김환진',
        ownerNumber: '000111',
        ownerPhoneNumber: '01044871682',
        petId: 1,
        petNumber: '000529',
        petName: '초코',
    }),
    new SendSuggestionClass({
        ownerId: 1,
        ownerName: '김환진',
        ownerNumber: '000111',
        ownerPhoneNumber: '01044871682',
        petId: 1,
        petNumber: '000529',
        petName: '초코',
    }),
    new SendSuggestionClass({
        ownerId: 1,
        ownerName: '김환진',
        ownerNumber: '000111',
        ownerPhoneNumber: '01044871682',
        petId: 1,
        petNumber: '000529',
        petName: '초코',
    }),
    new SendSuggestionClass({
        ownerId: 1,
        ownerName: '김환진',
        ownerNumber: '000111',
        ownerPhoneNumber: '01044871682',
        petId: 1,
        petNumber: '000529',
        petName: '초코',
    }),
    new SendSuggestionClass({
        ownerId: 1,
        ownerName: '김환진',
        ownerNumber: '000111',
        ownerPhoneNumber: '01044871682',
        petId: 2,
        petNumber: '000557',
        petName: '호두',
    }),
    new SendSuggestionClass({
        ownerId: 2,
        ownerName: '서주원',
        ownerNumber: '000222',
        ownerPhoneNumber: '01086047298',
        petId: 3,
        petNumber: '000352',
        petName: '삥삥이',
    }),
    new SendSuggestionClass({
        ownerId: 3,
        ownerName: '박찬규',
        ownerNumber: '000333',
        ownerPhoneNumber: '01022223333',
        petId: 4,
        petNumber: '000195',
        petName: '끵끵이',
    }),
    new SendSuggestionClass({
        ownerId: 3,
        ownerName: '박찬규',
        ownerNumber: '000333',
        ownerPhoneNumber: '01022223333',
        petId: 5,
        petNumber: '000974',
        petName: '발라리안',
    }),
    new SendSuggestionClass({
        ownerId: 5,
        ownerName: '김평섭',
        ownerNumber: '000555',
        ownerPhoneNumber: '01033334444',
        petId: 6,
        petNumber: '000116',
        petName: '쀽쀽이',
    }),
    new SendSuggestionClass({
        ownerId: 6,
        ownerName: '남기연',
        ownerNumber: '000666',
        ownerPhoneNumber: '01044445555',
        petId: 7,
        petNumber: '000110',
        petName: '동글이',
    }),
]

type focusInfoType = {
    focusNode?: Node | null
    focusOffset?: number
    anchorNode?: Node | null
    anchorOffset?: number
}
type SearchInfoType = {
    searchText: string
    startIndex: number
    endIndex: number
}

type KMentionProps = {
    InputClassName?: string
    MentionClassName?: string
    onClick?: (event: React.MouseEvent) => void
    onKeyDown?: (event: React.KeyboardEvent) => void
    onKeyUp?: (event: React.KeyboardEvent) => void
    onKeyPress?: (event: React.KeyboardEvent) => void
    SuggestionContainer: (props: any) => JSX.Element
    SuggestionEntry: (props: any) => JSX.Element
};


export const KMention = ({InputClassName, MentionClassName, onClick, onKeyDown, onKeyUp, onKeyPress, SuggestionContainer, SuggestionEntry}: KMentionProps) => {
    const textAreaRef = useRef<HTMLDivElement>(null)
    const [focusInfo, setFocusInfo] = useState<focusInfoType | undefined>(undefined)

    const [isSearching, setIsSearching] = useState<boolean>(false)
    const [searchInfo, setSearchInfo] = useState<SearchInfoType | null>(null)
    const [suggestions, setSuggestions] = useState<SendSuggestionClass[]>([])
    const [suggestionFocusIndex, setSuggestionFocusIndex] = useState<number>(0)

    const getSearchResult = (text: string) => {
        const result = []

        for (let entry of dummyData) {
            if (entry.ownerName.includes(text) || entry.petName.includes(text))
                result.push(entry)
        }
        return result
    }

    const calculateFocusedInfo = () => {
        // default text_row
        const firstRowNode = textAreaRef.current?.firstElementChild

        // div check
        if (firstRowNode?.nodeName !== 'DIV') {
            const rowNode = makeTextRowNode()
            textAreaRef.current?.appendChild(rowNode)
        }

        // focus info
        const selection = document.getSelection()

        const focusNode = selection?.focusNode
        const focusOffset = selection?.focusOffset
        const anchorNode = selection?.anchorNode
        const anchorOffset = selection?.anchorOffset

        setFocusInfo({focusNode, focusOffset, anchorNode, anchorOffset})

        // check mention trigger
        const beforeText = focusNode?.textContent?.substring(0, focusOffset) || ''
        checkMentionState(beforeText)
    }

    const checkMentionState = (text: string) => {
        const matchedList = Array.from(text.matchAll(myRegexp))
        // found
        if (matchedList.length > 0) {
            setIsSearching(true)

            const lastMatched = matchedList[matchedList.length - 1]

            const lastMatchedText = lastMatched[0]
            const lastMatchedStartIndex = lastMatched.index || 0
            const searchText = lastMatchedText.substring(1, lastMatchedText.length)

            console.log(`matched! text: ${lastMatchedText}`)
            setSearchInfo({
                searchText,
                startIndex: lastMatchedStartIndex,
                endIndex: lastMatchedStartIndex + lastMatchedText.length - 1,
            })

            // search
            setSuggestions(getSearchResult(searchText))
        } else {
            setIsSearching(false)
            setSuggestionFocusIndex(0)
            setSearchInfo(null)
        }
    }

    const handleInputClick = (event: React.MouseEvent) => {
        calculateFocusedInfo()
    }

    const makeTextRowNode = (textContent?: string) => {
        const divNode = document.createElement('div')
        divNode.className = 'k_mention_row'
        divNode.textContent = textContent || '\uFEFF'

        return divNode
    }

    const makeTextNode = (textContent?: string) => {
        return document.createTextNode(textContent || '\uFEFF')
    }

    const setCaret = (node: Node, offset: number) => {
        const selection = document.getSelection()
        const range = document.createRange()

        range.selectNode(node)
        range.setStart(node, offset)
        range.setEnd(node, offset)
        selection?.removeAllRanges()
        selection?.addRange(range)
    }

    const insertNewTextRow = (node: Node, newNode: Node) => {
        const textAreaNode = textAreaRef.current

        textAreaNode && textAreaNode.insertBefore(newNode, node.nextSibling)
    }

    const findTextRowByNode = (node: Node) => {
        let textRowNode: Node | null | undefined = node

        // 자기자신
        if (textRowNode?.parentElement?.className === 'k_mention_text_area') {
            return textRowNode
        }

        // 부모에 있음
        while (textRowNode && textRowNode?.nodeName !== 'DIV') {
            textRowNode = textRowNode?.parentNode
        }

        return textRowNode
    }

    const makeNewLine = () => {
        // 줄바꿈
        const focusNode = focusInfo?.focusNode
        const focusOffset = focusInfo?.focusOffset || 0
        const textContent = focusNode?.textContent || ''
        const beforeText = textContent.substring(0, focusOffset) || '\uFEFF'
        const afterText = '\uFEFF' + textContent.substring(focusOffset, textContent.length)

        console.log('new line focusNode')
        console.log(focusNode)
        console.log(`beforeText: ${beforeText}, afterText: ${afterText}`)

        if (focusNode) {
            focusNode.textContent = beforeText
            if (beforeText === '' && focusNode.previousSibling?.nodeName !== 'SPAN') {
                focusNode.textContent = beforeText || '\uFEFF'
            }

            const newTextRowNode = makeTextRowNode(afterText)

            const textRowNode = findTextRowByNode(focusNode)

            // 다음 형제가 있음
            if (focusNode.nextSibling !== null) {
                // 형제 넣어주기
                let nextSiblingNode: Node | undefined | null = focusNode.nextSibling
                const siblings = []

                console.log(textRowNode?.childNodes)
                while (nextSiblingNode !== null) {
                    siblings.push(nextSiblingNode)
                    nextSiblingNode = nextSiblingNode?.nextSibling
                }

                for (let sibling of siblings) {
                    newTextRowNode.appendChild(sibling)
                }
            }

            // new row 삽입
            textRowNode && insertNewTextRow(textRowNode, newTextRowNode)

            // 포커싱
            setCaret(newTextRowNode.firstChild!, 1)
            newTextRowNode.scrollIntoView({block: 'nearest'})
        }
    }

    const handleInputKeyPress = (event: React.KeyboardEvent) => {
        switch (event.key) {
            case 'Enter':
                event.stopPropagation()
                event.preventDefault()

                // 줄바꿈
                if (event.shiftKey) {
                    makeNewLine()
                } else {
                    if (isSearching && suggestions.length > 0) {
                        // mention 입력
                        handleSelectSuggestion()
                    } else {
                        // TODO: 메시지 전송
                    }
                }
                break

        }

        calculateFocusedInfo()
    }


    const handleInputKeyDown = (event: React.KeyboardEvent) => {
        switch (event.key) {
            case 'ArrowUp':
                if (isSearching) {
                    event.preventDefault()
                    if (suggestionFocusIndex - 1 >= 0) {
                        setSuggestionFocusIndex(suggestionFocusIndex - 1)
                    }
                }
                break
            case 'ArrowDown':
                if (isSearching) {
                    event.preventDefault()
                    const totalLength = suggestions.length
                    if (suggestionFocusIndex + 1 < totalLength) {
                        setSuggestionFocusIndex(suggestionFocusIndex + 1)
                    }
                }
                break
            case 'Backspace':
                // 줄 지울 때
                const focusNode = focusInfo?.focusNode
                const focusOffset = focusInfo?.focusOffset || 0
                const anchorOffset = focusInfo?.anchorOffset
                if (focusNode) {
                    const textRowNode = findTextRowByNode(focusNode)
                    const textRowPreviousSibling = textRowNode?.previousSibling
                    const focusPreviousSibling = focusNode.previousSibling
                    const textRowFirstNode = textRowNode?.firstChild

                    if (textRowPreviousSibling !== null && focusPreviousSibling === null && focusOffset === 1 && textRowNode && anchorOffset === focusOffset) {
                        event.preventDefault()


                        if (textRowNode.childNodes.length > 0) {
                            let child: Node | undefined | null = textRowNode.firstChild
                            const children = []

                            while (child !== null) {
                                children.push(child)
                                child = child.nextSibling
                            }

                            for (let node of children) {
                                textRowPreviousSibling?.appendChild(node)
                            }
                        }

                        // 줄 지우기
                        textAreaRef.current?.removeChild(textRowNode)

                        // 포커싱
                        textRowFirstNode && setCaret(textRowFirstNode, 0)
                    }
                }
                break
        }

        calculateFocusedInfo()
    }

    const handleInputKeyUp = (event: React.KeyboardEvent) => {
        calculateFocusedInfo()
    }

    const handleEntryMouseEnter = (index: number) => () => {
        setSuggestionFocusIndex(index)
    }

    const handleSelectSuggestion = () => {
        const focusNode = focusInfo?.focusNode

        if (focusNode) {
            const textRowNode = findTextRowByNode(focusNode)

            if (textRowNode) {
                const textContent = focusNode.textContent || ''
                const startIndex = searchInfo?.startIndex || 0
                const endIndex = searchInfo?.endIndex || 0
                const suggestion = suggestions[suggestionFocusIndex]
                const focusNextNode = focusNode.nextSibling

                // create new focusNode
                const focusBeforeText = textContent.substring(0, startIndex)
                const focusAfterText = textContent.substring(
                    endIndex + 1,
                    textContent.length,
                )

                // focus before text
                focusNode.textContent = focusBeforeText

                // mention
                const mentionNode = document.createElement('span')
                mentionNode.className = MentionClassName || 'k_mention'
                mentionNode.textContent = `@${suggestion.ownerName}/${suggestion.petName}`
                mentionNode.contentEditable = 'false'
                textRowNode.insertBefore(mentionNode, focusNextNode)

                // focus after text
                const focusAfterNode = makeTextNode('\u00A0' + focusAfterText)
                textRowNode.insertBefore(focusAfterNode, focusNextNode)

                // 포커싱
                setCaret(focusAfterNode, 1)
            }
        }
    }

    const handleEntryClick = () => {
        handleSelectSuggestion()
        setIsSearching(false)
    }

    const handleInputPaste = (event: React.ClipboardEvent) => {
        console.log(event.clipboardData?.getData('text/html'))
    }




    return (
            <div className={`k_mention_container ${InputClassName}`}>
                <div
                    className="k_mention_text_area"
                    ref={textAreaRef}
                    role={'textarea'}
                    contentEditable={true}
                    spellCheck={false}
                    suppressContentEditableWarning={true}
                    onClick={handleInputClick}
                    onKeyDown={handleInputKeyDown}
                    onKeyPress={handleInputKeyPress}
                    onKeyUp={handleInputKeyUp}
                    onPaste={handleInputPaste}
                >
                    <div className="k_mention_row">
                        <br/>
                    </div>
                </div>

                <KMentionSuggestionsContainer
                    isSearching={isSearching}
                    suggestions={suggestions}
                    searchValue={searchInfo?.searchText || ''}
                    suggestionFocusIndex={suggestionFocusIndex}
                    setSuggestionFocusIndex={setSuggestionFocusIndex}
                    onMouseEnter={handleEntryMouseEnter}
                    EntryComponent={SuggestionEntry}
                    onClick={handleEntryClick}
                />
            </div>
    );
};