import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import Player from './components/Player';
import Controls from './components/Controls';
import dir from './videoDirectory';

function App() {

    const initialRender = useRef(true)

    let [countdownStatus, setCountdownStatus] = useState(false)
    let [buttonRefs, setButtonRefs] = useState({})
    let [videoRefs, setVideoRefs] = useState({})
    let [playerLinks, setPlayerLinks] = useState({
        p1: '1.mp4',
    })
    let [dirRef, setDirRef] = useState(null)
    let [activePlayer, setActivePlayer] = useState(null)
    let [queuedPlayer, setQueuedPlayer] = useState(null)
    let [queuedChoice, setQueuedChoice] = useState(null)
    let [buttonChecked, setButtonChecked] = useState(false)
    let [ending, setEnding] = useState(false)
    let [creditShow, setCreditShow] = useState(false)

    let players = ['p1','p2','p3']

    const setVisiblePlayer = (propPlayer) => {
        console.log('setting visibility')
        players.forEach(player => {
            player === propPlayer ?
                videoRefs[player].current.classList.remove('hidden')
            :
                videoRefs[player].current.classList.add('hidden')
        }) 
    }

    const startNextVideo = () => {
        console.log(queuedPlayer)
        setVisiblePlayer(queuedPlayer)
        videoRefs[queuedPlayer].current.play()
    }

    const addVideoRef = (ref, id) => {
        let newRefs = videoRefs
        newRefs[id] = ref
        setVideoRefs(newRefs)
    }

    const startCountdownLine = () => {
        setCountdownStatus(true)
        setTimeout(() => {
            setCountdownStatus(false)
        }, 6000)
    }

    const buttonOpacityToggle = (bool) => {
        Object.keys(buttonRefs).forEach(buttonKey => {
            bool ? 
                buttonRefs[buttonKey].current.classList.remove('hidden')
                :
                buttonRefs[buttonKey].current.classList.add('hidden')
        })
    }

    const addButtonRef = (ref, id) => {
        let newRefs = buttonRefs
        newRefs[id] = ref
        setButtonRefs(newRefs)
    }

    const loadChoices = () => {
        let choices = dirRef.choices
        let vacantPlayers = players.filter(player => player !== activePlayer)
        let links = {...playerLinks};
        choices.forEach((choice,i) => {
            links[vacantPlayers[i]] = dir[choice].link
        })
        setPlayerLinks(links)
    }

    useEffect(() => {
        if (!initialRender.current && dirRef.choices) {
            loadChoices()
        }
    // eslint-disable-next-line
    }, [dirRef])

    useEffect(() => {
        if (!initialRender.current) {
            let remainingTime = videoRefs[activePlayer].current.duration - videoRefs[activePlayer].current.currentTime
            setTimeout(startNextVideo, remainingTime * 1000 - 500)
        }
    // eslint-disable-next-line
    }, [queuedPlayer])

    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false
        } else if (dirRef.choices){
            let videoLength = videoRefs[activePlayer].current.duration
            setTimeout(() => {
                buttonOpacityToggle(true)
                startCountdownLine()
            }, videoLength * 1000 - 7000)
            setTimeout(() => {
                let choice = Math.random() < 0.5 ? 'left' : 'right';
                onChoiceClick(choice)
            }, videoLength * 1000 - 2000)
        } else {
            setEnding(true)
        }
    // eslint-disable-next-line
    }, [activePlayer])

    const onChoiceClick = (side) => {
        if (!buttonRefs.A.current.classList.contains('active') && !buttonRefs.B.current.classList.contains('active')) {
            let vacantPlayers = players.filter(player => player !== activePlayer)
            if (side === 'left') {
                setQueuedPlayer(vacantPlayers[0])
                setQueuedChoice(dirRef.choices[0])
                buttonRefs.A.current.classList.add('active')
            } else {
                setQueuedPlayer(vacantPlayers[1])
                setQueuedChoice(dirRef.choices[1])
                buttonRefs.B.current.classList.add('active')
            }
            setButtonChecked(true)
        }
    }

    const onVideoEnd = () => {
        if (!ending) {
            setActivePlayer(queuedPlayer)
            setDirRef(dir[queuedChoice])
            setButtonChecked(false)
            buttonOpacityToggle(false)
            buttonRefs.A.current.classList.remove('active')
            buttonRefs.B.current.classList.remove('active')
        } else {
            setCreditShow(true)
        }
    }

    const onStartClick = (e) => {
        videoRefs.p1.current.play()
        e.currentTarget.style.display = "none"
        setActivePlayer('p1')
        setDirRef(dir.start)
        setVisiblePlayer('p1')
    }

    return (
        <div className="App">
            { countdownStatus ? <div className="countdown-line"></div> : null} 
            <div className="videos-wrapper">
                <Player
                    id="p1" 
                    videoLink={playerLinks.p1}
                    onVideoEnd={onVideoEnd}
                    showRef={addVideoRef}
                />
                <Player
                    id="p2"
                    videoLink={playerLinks.p2}
                    onVideoEnd={onVideoEnd}
                    showRef={addVideoRef}
                />
                <Player
                    id="p3"
                    videoLink={playerLinks.p3}
                    onVideoEnd={onVideoEnd}
                    showRef={addVideoRef}
                />
            </div>
            
            <Controls
                buttonChecked={buttonChecked}
                startClick={onStartClick}
                choices={dirRef ? dirRef.choices : null}
                choiceClick={onChoiceClick}
                addButtonRef={addButtonRef}
            />

            <div className={`credits ${creditShow ? '' : 'hidden'}`}>

                <p>Credits</p>

            </div>
        </div>
    );
}

export default App;
