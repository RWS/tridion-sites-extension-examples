import { memo } from 'react';

import { Icon } from '@tridion-sites/extensions';

export const LockIcon = memo(() => (
    <Icon viewBox="0 0 24 24">
        <path
            d="M18,21H6c-0.6,0-1-0.4-1-1V10c0-0.6,0.4-1,1-1h12c0.6,0,1,0.4,1,1v10C19,20.6,18.6,21,18,21z"
            opacity=".3"
        />
        <path d="M14 15c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2S14 13.9 14 15zM18 9h-2V7c0-2.2-1.8-4-4-4C9.8 3 8 4.8 8 7v2H6V7c0-3.4 2.6-6 6-6 3.4 0 6 2.6 6 6V9z" />
        <path d="M18,22H6c-1.1,0-2-0.9-2-2V10c0-1.1,0.9-2,2-2h12c1.1,0,2,0.9,2,2v10C20,21.1,19.1,22,18,22z M6,10v10h12l0-10H6z" />
    </Icon>
));

LockIcon.displayName = 'LockIcon';
