import '../js/jqueryPlugins';
import "jbox/dist/jBox.min.css";
import "../js/libraries/jquery.nouislider.min.css";
import "../js/libraries/jquery.nouislider.pips.min.css";
import "../js/libraries/flightindicators.css";

import "../css/theme.css";
import "../css/main.css";
import "../css/tabs/static_tab.css";
import "../css/tabs/landing.css";
import "../css/tabs/setup.css";
import "../css/tabs/help.css";
import "../css/tabs/ports.css";
import "../css/tabs/configuration.css";
import "../css/tabs/pid_tuning.css";
import "../css/tabs/receiver.css";
import "../css/tabs/servos.css";
import "../css/tabs/gps.css";
import "../css/tabs/motors.css";
import "../css/tabs/led_strip.css";
import "../css/tabs/sensors.css";
import "../css/tabs/cli.css";
// import "../tabs/presets/presets.css";
// import "../tabs/presets/TitlePanel/PresetTitlePanel.css";
// import "../tabs/presets/DetailedDialog/PresetsDetailedDialog.css";
// import "../tabs/presets/SourcesDialog/SourcesDialog.css";
// import "../tabs/presets/SourcesDialog/SourcePanel.css";
import "../css/tabs/logging.css";
import "../css/tabs/onboard_logging.css";
import "../css/tabs/firmware_flasher.css";
import "../css/tabs/adjustments.css";
import "../css/tabs/auxiliary.css";
import "../css/tabs/failsafe.css";
import "../css/tabs/osd.css";
import "../css/tabs/vtx.css";
import "../css/tabs/power.css";
import "../css/tabs/transponder.css";
import "../css/tabs/privacy_policy.css";
import "../css/tabs/options.css";
import "../css/opensans_webfontkit/fonts.css";
import "../css/dropdown-lists/css/style_lists.css";
import "switchery-latest/dist/switchery.min.css";
import "../css/switchery_custom.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "../components/MotorOutputReordering/Styles.css";
import "../css/select2_custom.css";
import "select2/dist/css/select2.min.css";
import "multiple-select/dist/multiple-select.min.css";
import "../components/EscDshotDirection/Styles.css";
import "../css/dark-theme.css";

import "./main";

import { registerSW } from 'virtual:pwa-register';

registerSW({
    onOfflineReady() {
        alert('App is ready for offline use.');
    },
});
