import firebase from "./firebase";

const auth = firebase.auth();

export const login = async({ email, password }, onSuccess, onError) => {
    try {
        const { user } = await auth.signInWithEmailAndPassword(email, password);
        return onSuccess(user);
    } catch (error) {
        return onError(error);
    }
}

export const register = async({ name, email, password }, onSuccess, onError) => {
    try {
        const { user } = await auth.createUserWithEmailAndPassword(email, password);
        if (user) {
            await user.updateProfile({ displayName: name })
            await user.sendEmailVerification();
            return onSuccess(user);
        }
    } catch (error) {
        return onError(error);
    }
}

export const logoff = async(onSuccess, onError) => {
    try {
        await auth.signOut();
        return onSuccess();
    } catch (error) {
        return onError(error);
    }
}

export const getCurrentUserId = () => auth.currentUser ? auth.currentUser.uid : 'uid';

export const getCurrentUserName = () => auth.currentUser ? auth.currentUser.displayName : null;

export const setOnAuthStateChanged = (onUserAuthenticated, onUserNotFound) => auth.onAuthStateChanged((user) => {
    if (user) {
        return onUserAuthenticated(user);
    } else {
        return onUserNotFound(user);
    }
});