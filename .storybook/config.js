import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-emotion-theme';

const themes = [{
    
}];
addDecorator(withThemesProvider(themes));