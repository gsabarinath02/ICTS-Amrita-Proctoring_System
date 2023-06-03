"use-strict";

let isPresenter = false;

// ####################################################
// SHOW HIDE DESIRED BUTTONS BY RULES
// ####################################################

const isRulesActive = true;

const BUTTONS = {
    main: {
        shareButton: false,
        hideMeButton: true,
        startAudioButton: true,
        startVideoButton: true,
        startScreenButton: true,
        swapCameraButton: true,
        chatButton: true,
        participantsButton: true,
        whiteboardButton: true,
        settingsButton: true,
        aboutButton: false,
        exitButton: true,
        raiseHand: true,
    },
    settings: {
        lockRoomButton: true,
        unlockRoomButton: true,
        lobbyButton: true,
        tabRecording: true,
        streamsAvailable: true,
    },
    producerVideo: {
        fullScreenButton: true,
        snapShotButton: true,
        muteAudioButton: true,
        videoPrivacyButton: false,
    },
    consumerVideo: {
        fullScreenButton: true,
        snapShotButton: false,
        sendMessageButton: false,
        sendFileButton: false,
        sendVideoButton: false,
        muteVideoButton: false,
        muteAudioButton: false,
        audioVolumeInput: true,
        ejectButton: false,
    },
    videoOff: {
        sendMessageButton: false,
        sendFileButton: false,
        sendVideoButton: false,
        muteAudioButton: false,
        audioVolumeInput: false,
        ejectButton: false,
    },
    chat: {
        chatSaveButton: true,
        chatEmojiButton: true,
        chatMarkdownButton: true,
        chatShareFileButton: true,
        chatSpeechStartButton: true,
    },
    participantsList: {
        saveInfoButton: true,
    },
    //...
};

function handleRules(isPresenter) {
    console.log("06.1 ----> IsPresenter: " + isPresenter);
    if (!isRulesActive) return;
    if (!isPresenter) {
        BUTTONS.main.settingsButton = false;
        BUTTONS.main.shareButton = false;
        BUTTONS.main.whiteboardButton = false;
        BUTTONS.main.participantsButton = false;
        BUTTONS.main.hideMeButton = false;

        BUTTONS.participantsList.saveInfoButton = false;
        BUTTONS.settings.lockRoomButton = false;
        BUTTONS.settings.unlockRoomButton = false;
        BUTTONS.settings.lobbyButton = false;
        BUTTONS.videoOff.muteAudioButton = false;
        BUTTONS.videoOff.ejectButton = false;
        BUTTONS.consumerVideo.ejectButton = false;
        BUTTONS.consumerVideo.muteAudioButton = false;
        BUTTONS.consumerVideo.muteVideoButton = false;
        BUTTONS.settings.streamsAvailable = false;
        //...
    } else {
        BUTTONS.main.settingsButton = true;
        BUTTONS.main.shareButton = true;
        BUTTONS.main.whiteboardButton = true;
        BUTTONS.main.participantsButton = true;
        BUTTONS.main.hideMeButton = true;

        BUTTONS.participantsList.saveInfoButton = true;
        BUTTONS.settings.lockRoomButton = !isRoomLocked;
        BUTTONS.settings.unlockRoomButton = isRoomLocked;
        BUTTONS.settings.lobbyButton = true;
        BUTTONS.videoOff.muteAudioButton = true;
        BUTTONS.videoOff.ejectButton = true;
        BUTTONS.consumerVideo.ejectButton = true;
        BUTTONS.consumerVideo.muteVideoButton = true;
        //...
    }
    // main. settings.
    BUTTONS.main.hideMeButton ? show(hideMeButton) : hide(hideMeButton);
    BUTTONS.settings.lockRoomButton ? show(lockRoomButton) : hide(lockRoomButton);
    BUTTONS.settings.unlockRoomButton ? show(unlockRoomButton) : hide(unlockRoomButton);
    BUTTONS.settings.lobbyButton ? show(lobbyButton) : hide(lobbyButton);
    BUTTONS.participantsList.saveInfoButton ? show(participantsSaveBtn) : hide(participantsSaveBtn);
    BUTTONS.main.shareButton ? show(shareButton) : hide(shareButton);
    BUTTONS.main.whiteboardButton ? show(whiteboardButton) : hide(whiteboardButton);
    BUTTONS.main.settingsButton ? show(settingsButton) : hide(settingsButton);
    BUTTONS.main.participantsButton ? show(participantsButton) : hide(participantsButton);
    if (!BUTTONS.settings.streamsAvailable) {
        videoMediaContainer.style.display = "none";
        videoPinMediaContainer.style.display = "none";
        instructions();
    }
    //...
}

function instructions() {
    this.sound("alert");
    Swal.fire({
        icon: "info",
        title: "<span style='color: blue'>Proctoring Notice</span>",
        html: `<p style="text-align: justify; color: black">This meeting is being proctored to ensure a secure and fair environment for all participants. The session is actively monitored and recorded for review, if necessary.</p>
        <p style="text-align: justify; color: black">Any instances of misconduct or violations of exam guidelines will be taken seriously.</p>
        <p style="text-align: justify; color: black">Please be advised that any form of malpractice or dishonest behavior during the exam may result in disqualification from the current exam. Depending on the severity of the infraction, appropriate actions will be taken, which may include further consequences such as a ban from future exams or a failing grade in the subject.</p>
        <ul style="margin-top: 1.5rem; color:red">
            <li>Camera and microphones should be on during the entire meeting.</li>
            <li>Entire screen should be shared.</li>
            <li>You are allowed to leave the room only after you submit the exam.</li>
        </ul>
        <p style="text-align: justify; color: black">We kindly request all participants to adhere to the highest standards of integrity and professionalism throughout the Exam. Your cooperation in maintaining a fair and respectful environment is greatly appreciated.</p>`,

        showDenyButton: true,
        denyButtonText: "I Understand",
        showCloseButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        confirmButtonColor: "#3085d6",
        denyButtonColor: "#d33",
        customClass: {
            title: "swal-title",
            content: "swal-text",
            actions: "swal-actions",
            popup: "swal-popup",
            container: "swal-wide",
        },
        showClass: {
            popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
            popup: "animate__animated animate__fadeOutUp",
        },
        onOpen: () => {
            const swalPopup = Swal.getPopup();
            swalPopup.classList.add("custom-popup");
        },
        onDeny: () => {
            this.exit();
        },
    });
}
