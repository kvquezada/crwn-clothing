import {createSelector} from 'reselect';

// function to get the state
const selectDirectory = state => state.directory;

export const selectDirectorySections = createSelector(
    [selectDirectory],
    directory => directory.sections
);