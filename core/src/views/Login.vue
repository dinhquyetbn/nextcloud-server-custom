<!--
  - SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
  - SPDX-License-Identifier: AGPL-3.0-or-later
-->

<template>
	<div class="wrap-login">
	  <div class="sidebar-login text-left">
		<div class="logo-bttt">
		  <img src="../../../core/img/logo/logo-btttt.png" />
		</div>
		<div style="margin-bottom: 25px;">
		  <p class="side-title">BỘ THÔNG TIN VÀ TRUYỀN THÔNG</p>
		  <p class="side-description">Địa chỉ: 18 Nguyễn Du, Hà Nội</p>
		</div>
		<div>
		  <p class="side-description" style="font-weight: 500;">Mọi thông tin góp ý xin gửi về:</p>
		  <p class="side-description">Email: hotrokythuat@mic.gov.vn</p>
		  <p class="side-description">Tel: (024) 35563457</p>
		</div>
		<div class="box-quyche d-flex">
		  <div class="email-bttt d-flex">
			<img src="../../../core/img/logo/email-btttt.png" />
		  </div>
		  <div class="d-flex">
			<div style="color: #0072c6">Quy chế sử dụng</div>
			<div class="side-description" style="font-weight: 600;">@mic.gov.vn</div>
		  </div>
		</div>
	  </div>
	  <div class="box-login">
		<div>
		  <div class="header-title">HỆ THỐNG LƯU TRỮ VÀ QUẢN LÝ TRI THỨC</div>
		  <div class="header-description">BỘ THÔNG TIN VÀ TRUYỀN THÔNG</div>
		</div>
		<div class="guest-box login-box">
		  <div>
			<div class="login-box-title">ĐĂNG NHẬP HỆ THỐNG</div>
		  </div>
		  <template v-if="!hideLoginForm || directLogin">
			<transition name="fade" mode="out-in">
			  <div v-if="!passwordlessLogin && !resetPassword && resetPasswordTarget === ''"
				style="padding: 30px 30px 0 30px;">
				<LoginForm :username.sync="user" :redirect-url="redirectUrl" :direct-login="directLogin"
				  :messages="messages" :errors="errors" :throttle-delay="throttleDelay"
				  :auto-complete-allowed="autoCompleteAllowed" :email-states="emailStates" @submit="loading = true" />
				  <div class="login-sso">
					<a class="button" href="https://cloud.mic.gov.vn/apps/user_oidc/login/1" >
					  {{ t("core", "Đăng nhập với MIC SSO") }}
					</a>
				  </div>
				<!-- <a class="button"
					:class="{ 'single-alt-login-option': countAlternativeLogins }" href="#">
					{{ t("core", "Login with MIC SSO") }}
				</a> -->
				<!-- <a v-if="canResetPassword && resetPasswordLink !== ''" id="lost-password" class="login-box__link"
				  :href="resetPasswordLink">
				  {{ t("core", "Forgot password?") }}
				</a>
				<a v-else-if="canResetPassword && !resetPassword" id="lost-password" class="login-box__link"
				  :href="resetPasswordLink" @click.prevent="resetPassword = true">
				  {{ t("core", "Forgot password?") }}
				</a>
				<template v-if="hasPasswordless">
				  <div v-if="countAlternativeLogins" class="alternative-logins">
					<a v-if="hasPasswordless" class="button"
					  :class="{ 'single-alt-login-option': countAlternativeLogins }" href="#"
					  @click.prevent="passwordlessLogin = true">
					  {{ t("core", "Log in with a device") }}
					</a>
				  </div>
				  <a v-else href="#" @click.prevent="passwordlessLogin = true">
					{{ t("core", "Log in with a device") }}
				  </a>
				</template> -->
			  </div>
			  <div v-else-if="!loading && passwordlessLogin" key="reset-pw-less"
				class="login-additional login-passwordless">
				<PasswordLessLoginForm :username.sync="user" :redirect-url="redirectUrl"
				  :auto-complete-allowed="autoCompleteAllowed" :is-https="isHttps" :is-localhost="isLocalhost"
				  @submit="loading = true" />
				<NcButton type="tertiary" :aria-label="t('core', 'Back to login form')" :wide="true"
				  @click="passwordlessLogin = false">
				  {{ t("core", "Back") }}
				</NcButton>
			  </div>
			  <div v-else-if="!loading && canResetPassword" key="reset-can-reset" class="login-additional">
				<div class="lost-password-container">
				  <ResetPassword v-if="resetPassword" :username.sync="user" :reset-password-link="resetPasswordLink"
					@abort="resetPassword = false" />
				</div>
			  </div>
			  <div v-else-if="resetPasswordTarget !== ''">
				<UpdatePassword :username.sync="user" :reset-password-target="resetPasswordTarget"
				  @done="passwordResetFinished" />
			  </div>
			</transition>
		  </template>
		  <template v-else>
			<transition name="fade" mode="out-in">
			  <NcNoteCard type="info" :title="t('core', 'Login form is disabled.')">
				{{
				  t(
					"core",
					"The Nextcloud login form is disabled. Use another login option if available or contact your administration."
				  )
				}}
			  </NcNoteCard>
			</transition>
		  </template>
  
		  <!-- <div id="alternative-logins" class="alternative-logins">
			<NcButton v-for="(alternativeLogin, index) in alternativeLogins" :key="index" type="secondary" :wide="true"
			  :class="[alternativeLogin.class]" role="link" :href="alternativeLogin.href">
			  {{ alternativeLogin.name }}
			</NcButton>
		  </div> -->
		</div>
		<div class="sub-description">
		  <div>Bản quyền © 2024 thuộc Trung tâm Thông tin</div>
		  <div>Bộ Thông tin và Truyền thông</div>
		</div>
	  </div>
	</div>
  </template>
  
  <script>
  import { loadState } from "@nextcloud/initial-state";
  import queryString from "query-string";
  
  import LoginForm from "../components/login/LoginForm.vue";
  import PasswordLessLoginForm from "../components/login/PasswordLessLoginForm.vue";
  import ResetPassword from "../components/login/ResetPassword.vue";
  import UpdatePassword from "../components/login/UpdatePassword.vue";
  import NcButton from "@nextcloud/vue/dist/Components/NcButton.js";
  import NcNoteCard from "@nextcloud/vue/dist/Components/NcNoteCard.js";
  
  const query = queryString.parse(location.search);
  if (query.clear === "1") {
	try {
	  window.localStorage.clear();
	  window.sessionStorage.clear();
	  console.debug("Browser storage cleared");
	} catch (e) {
	  console.error("Could not clear browser storage", e);
	}
  }
  
  export default {
	name: "Login",
  
	components: {
	  LoginForm,
	  PasswordLessLoginForm,
	  ResetPassword,
	  UpdatePassword,
	  NcButton,
	  NcNoteCard,
	},
  
	data() {
	  return {
		loading: false,
		user: loadState("core", "loginUsername", ""),
		passwordlessLogin: false,
		resetPassword: false,
  
		// Initial data
		errors: loadState("core", "loginErrors", []),
		messages: loadState("core", "loginMessages", []),
		redirectUrl: loadState("core", "loginRedirectUrl", false),
		throttleDelay: loadState("core", "loginThrottleDelay", 0),
		canResetPassword: loadState("core", "loginCanResetPassword", false),
		resetPasswordLink: loadState("core", "loginResetPasswordLink", ""),
		autoCompleteAllowed: loadState("core", "loginAutocomplete", true),
		resetPasswordTarget: loadState("core", "resetPasswordTarget", ""),
		resetPasswordUser: loadState("core", "resetPasswordUser", ""),
		directLogin: query.direct === "1",
		hasPasswordless: loadState("core", "webauthn-available", false),
		countAlternativeLogins: loadState("core", "countAlternativeLogins", false),
		alternativeLogins: loadState("core", "alternativeLogins", []),
		isHttps: window.location.protocol === "https:",
		isLocalhost: window.location.hostname === "localhost",
		hideLoginForm: loadState("core", "hideLoginForm", false),
		emailStates: loadState("core", "emailStates", []),
	  };
	},
  
	methods: {
	  passwordResetFinished() {
		this.resetPasswordTarget = "";
		this.directLogin = true;
	  },
	},
  };
  </script>
  
  <style lang="scss">
  body {
	font-size: var(--default-font-size);
  }
  
  .login-box {
	// Same size as dashboard panels
	//min-width: 500px;
	box-shadow: none;
	border-radius: 0;
	border: 1px solid #0072c6;
	max-width: 450px;
	width: 100%;
	// height: 270px;
	box-sizing: border-box;
	padding: 0;
  
	&__link {
	  display: block;
	  padding: 1rem;
	  font-size: var(--default-font-size);
	  text-align: center;
	  font-weight: normal !important;
	}
  }
  
  .fade-enter-active,
  .fade-leave-active {
	transition: opacity 0.3s;
  }
  
  .fade-enter,
  .fade-leave-to
  
  /* .fade-leave-active below version 2.1.8 */
	{
	opacity: 0;
  }
  
  .alternative-logins {
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
  
	.button-vue {
	  box-sizing: border-box;
	}
  }
  
  .login-passwordless {
	.button-vue {
	  margin-top: 0.5rem;
	}
  }
  
  #header {
	display: none;
  }
  
  .guest-box {
	border-radius: none;
  }
  
  .wrapper {
	max-width: 100%;
	height: 100%;
	margin-block: auto;
  }
  
  .wrap-login {
	display: table;
	width: 100%;
	height: 100vh;
	color: #fff;
  }
  
  .wrap-login .sidebar-login {
	display: table-cell;
	width: 300px;
	vertical-align: middle;
	background: #0072c6;
	padding: 20px 20px;
	height: 100%;
  }
  
  .wrap-login .sidebar-login .side-title {
	font-size: 18px;
	font-weight: 600;
	margin-bottom: 5px;
  }
  
  .wrap-login .sidebar-login .side-description {
	font-size: 16px;
	margin-bottom: 5px;
  }
  
  .wrap-login .box-login {
	display: table-cell;
	vertical-align: middle;
	padding: 20px;
	background: #f5f5f5;
  }
  
  .wrap-login .box-login .header-title {
	font-size: 26px;
	font-weight: 700;
	color: #0072c6;
	margin-bottom: 10px;
	line-height: 30px;
  }
  
  .wrap-login .box-login .header-description {
	font-size: 20px;
	color: #0072c6;
	font-weight: 500;
	margin-bottom: 30px;
  }
  
  .wrap-login .box-login .sub-description {
	color: #0072c6;
	margin-top: 20px;
	font-size: 16px;
  }
  
  .login-box-title {
	padding: 10px 5px;
	background: #0072c6;
	color: #fff;
	font-size: 16px;
	font-weight: 500;
  }
  
  .box-quyche {
	background: #fff;
	color: #616262;
	padding: 5px 10px;
	margin-top: 30px;
	display: flex;
  }
  
  .logo-bttt {
	text-align: center;
	margin-bottom: 10px;
  }
  
  .logo-bttt img {
	width: 130px;
	height: 130px;
  }
  
  .email-bttt img {
	width: 50px;
	height: 45px;
	margin-right: 10px;
  }
  
  footer.guest-box {
	display: none;
  }
  
  .button-vue {
	background: #0072c6 !important;
  }
  
  .button-vue--icon-only {
	background: transparent !important;
  }
  
  @media screen and (max-width: 800px) {
	.sidebar-login {
	  display: none !important;
	}
  }
  </style>
  