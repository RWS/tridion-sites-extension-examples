import { initializeGlobals } from '@globals';
import type { ExtensionModule, RuntimeInformation } from '@tridion-sites/extensions';

import packageJson from '../package.json';
import { customizeReplacingActionsGroup } from './customizeReplacingActionsGroup';
import { movePublishingActionsGroup } from './movePublishingActionsGroup';
import { moveUnpublishBeforePublishAction } from './moveUnpublishBeforePublishAction';
import { removeClipboardActionsGroup } from './removeClipboardActionsGroup';
import { removeLocalizeAction } from './removeLocalizeAction';
import { replaceOpenPublishingQueueWithNewStructureGroupAction } from './replaceOpenPublishingQueueWithNewStructureGroupAction';
import { replaceRefreshingActionsGroup } from './replaceRefreshingActionsGroup';

const extensionModule: ExtensionModule = {
    runtimeInfo: packageJson as RuntimeInformation,
    initializeGlobals,
    initialize: builder => {
        moveUnpublishBeforePublishAction(builder);
        removeLocalizeAction(builder);
        replaceOpenPublishingQueueWithNewStructureGroupAction(builder);

        movePublishingActionsGroup(builder);
        removeClipboardActionsGroup(builder);
        replaceRefreshingActionsGroup(builder);
        customizeReplacingActionsGroup(builder);
    },
};

export default extensionModule;
