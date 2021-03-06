import Vue from "vue";
// 方法
import {AmpMessage} from "./src/components/method/amp-message";
import {AmpNotify} from "./src/components/method/amp-notification";
import {AmpLoading} from "./src/components/method/amp-loading";
import AmpMessageBox from "./src/components/method/amp-messagebox/index";
// 表单校验
import {ValidationObserver} from "vee-validate";
import VeeInput from "./src/components/validate/VeeInput";
import VeeSelect from "./src/components/validate/VeeSelect";
// 控件
import AmpButton from "./src/components/common/AmpButton";
import AmpTooltip from "./src/components/common/AmpTooltip";
import AmpOverTooltip from "./src/components/common/AmpOverTooltip";
import AmpCheckbox from "./src/components/common/AmpCheckbox";
import AmpCheckboxButton from "./src/components/common/AmpCheckboxButton";
import AmpCheckboxGroup from "./src/components/common/AmpCheckboxGroup";
import AmpCascader from "./src/components/common/AmpCascader";
import AmpDatePicker from "./src/components/common/AmpDatePicker";
import AmpFormTable from "./src/components/common/AmpFormTable";
import AmpLink from "./src/components/common/AmpLink";
import AmpOption from "./src/components/common/AmpOption";
import AmpOptionGroup from "./src/components/common/AmpOptionGroup";
import AmpPagination from "./src/components/common/AmpPagination";
import AmpProgress from "./src/components/common/AmpProgress";
import AmpRadio from "./src/components/common/AmpRadio";
import AmpRadioButton from "./src/components/common/AmpRadioButton";
import AmpRadioGroup from "./src/components/common/AmpRadioGroup";
import AmpSelect from "./src/components/common/AmpSelect";
import AmpSlider from "./src/components/common/AmpSlider";
import AmpSteps from "./src/components/common/AmpSteps";
import AmpSwitch from "./src/components/common/AmpSwitch";
import AmpStatus from "./src/components/common/AmpStatus";
import AmpTable from "./src/components/common/AmpTable";
import AmpTag from "./src/components/common/AmpTag";
import AmpTimeline from "./src/components/common/AmpTimeline";
import AmpTimelineItem from "./src/components/common/AmpTimelineItem";
import AmpTimePicker from "./src/components/common/AmpTimePicker";
import AmpTimeSelect from "./src/components/common/AmpTimeSelect";
import AmpCollapse from "./src/components/common/AmpCollapse";
import AmpTree from "./src/components/common/AmpTree";
import AmpMultipleConfirm from "./src/components/common/AmpMultipleConfirm";
import AmpFilterConfirm from "./src/components/common/AmpFilterConfirm";
import AmpMenu from "./src/components/common/AmpMenu";
// 布局
import AmpLayoutWrap from "./src/components/layout/AmpLayoutWrap";
import AmpLayoutContent from "./src/components/layout/AmpLayoutContent";

const AmpFormValid = function (Vue) {
  // 表单校验
  Vue.component("ValidationObserver", ValidationObserver);
  Vue.component(VeeInput.name, VeeInput);
  Vue.component(VeeSelect.name, VeeSelect);
};
const AmpCommonUI = function (Vue) {
  // 方法
  Vue.prototype.$AmpMessage = AmpMessage;
  Vue.prototype.$AmpNotify = AmpNotify;
  Vue.prototype.$AmpLoading = AmpLoading;
  Vue.prototype.$AmpMessageBox = AmpMessageBox.install;
  // 组件
  Vue.component(AmpButton.name, AmpButton);
  Vue.component(AmpTooltip.name, AmpTooltip);
  Vue.component(AmpOverTooltip.name, AmpOverTooltip);
  Vue.component(AmpCheckbox.name, AmpCheckbox);
  Vue.component(AmpCheckboxButton.name, AmpCheckboxButton);
  Vue.component(AmpCheckboxGroup.name, AmpCheckboxGroup);
  Vue.component(AmpCascader.name, AmpCascader);
  Vue.component(AmpDatePicker.name, AmpDatePicker);
  Vue.component(AmpFormTable.name, AmpFormTable);
  Vue.component(AmpLink.name, AmpLink);
  Vue.component(AmpOption.name, AmpOption);
  Vue.component(AmpOptionGroup.name, AmpOptionGroup);
  Vue.component(AmpPagination.name, AmpPagination);
  Vue.component(AmpProgress.name, AmpProgress);
  Vue.component(AmpRadio.name, AmpRadio);
  Vue.component(AmpRadioButton.name, AmpRadioButton);
  Vue.component(AmpRadioGroup.name, AmpRadioGroup);
  Vue.component(AmpSelect.name, AmpSelect);
  Vue.component(AmpSlider.name, AmpSlider);
  Vue.component(AmpSteps.name, AmpSteps);
  Vue.component(AmpSwitch.name, AmpSwitch);
  Vue.component(AmpStatus.name, AmpStatus);
  Vue.component(AmpTable.name, AmpTable);
  Vue.component(AmpTag.name, AmpTag);
  Vue.component(AmpTimeline.name, AmpTimeline);
  Vue.component(AmpTimelineItem.name, AmpTimelineItem);
  Vue.component(AmpTimePicker.name, AmpTimePicker);
  Vue.component(AmpTimeSelect.name, AmpTimeSelect);
  Vue.component(AmpCollapse.name, AmpCollapse);
  Vue.component(AmpTree.name, AmpTree);
  Vue.component(AmpMultipleConfirm.name, AmpMultipleConfirm);
  Vue.component(AmpFilterConfirm.name, AmpFilterConfirm);
  Vue.component(AmpMenu.name, AmpMenu);
  // 布局
  Vue.component(AmpLayoutWrap.name, AmpLayoutWrap);
  Vue.component(AmpLayoutContent.name, AmpLayoutContent);
};
if (typeof window !== 'undefined' && window.Vue) {
  AmpCommonUI(window.Vue)
}
export {
  AmpCommonUI,
  AmpFormValid,
  AmpMessage,
  AmpNotify,
  AmpLoading
}
