<!--
  - @copyright 2019 Christoph Wurst <christoph@winzerhof-wurst.at>
  -
  - @author 2019 Christoph Wurst <christoph@winzerhof-wurst.at>
  - @author Richard Steinmetz <richard@steinmetz.cloud>
  -
  - @license GNU AGPL version 3 or any later version
  -
  - This program is free software: you can redistribute it and/or modify
  - it under the terms of the GNU Affero General Public License as
  - published by the Free Software Foundation, either version 3 of the
  - License, or (at your option) any later version.
  -
  - This program is distributed in the hope that it will be useful,
  - but WITHOUT ANY WARRANTY; without even the implied warranty of
  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  - GNU Affero General Public License for more details.
  -
  - You should have received a copy of the GNU Affero General Public License
  - along with this program.  If not, see <http://www.gnu.org/licenses/>.
  -->

<template>
	<div class="login-wrapper">
		<div class="login-left"></div>
		<div class="login-right">			
			<div class="login-sso">
				<div class="sso-wrapper">
					<div class="sso-logo"></div>
					<div class="sso-title"></div>
					<!-- <p class="sso-description">Đăng nhập</p> -->					
					<a v-if="isLoginSSO" class="sso-button" href="/apps/user_oidc/login/1">
						Đăng nhập Beta - SSO
					</a>
					<div  v-if="!isLoginSSO" class="login-core">
						<template v-if="!hideLoginForm || directLogin">
							<transition name="fade" mode="out-in">
								<div v-if="!passwordlessLogin && !resetPassword && resetPasswordTarget === ''">
									<LoginForm :username.sync="user"
										:redirect-url="redirectUrl"
										:direct-login="directLogin"
										:messages="messages"
										:errors="errors"
										:throttle-delay="throttleDelay"
										:auto-complete-allowed="autoCompleteAllowed"
										@submit="loading = true" />
									<a v-if="canResetPassword && resetPasswordLink !== ''"
										id="lost-password"
										class="login-box__link"
										:href="resetPasswordLink">
										{{ t('core', 'Forgot password?') }}
									</a>
									<a v-else-if="canResetPassword && !resetPassword"
										id="lost-password"
										class="login-box__link"
										:href="resetPasswordLink"
										@click.prevent="resetPassword = true">
										{{ t('core', 'Forgot password?') }}
									</a>
									<!-- <template v-if="hasPasswordless">
										<div v-if="countAlternativeLogins"
											class="alternative-logins">
											<a v-if="hasPasswordless"
												class="button"
												:class="{ 'single-alt-login-option': countAlternativeLogins }"
												href="#"
												@click.prevent="passwordlessLogin = true">
												{{ t('core', 'Log in with a device') }}
											</a>
										</div>
										<a v-else
											href="#"
											@click.prevent="passwordlessLogin = true">
											{{ t('core', 'Log in with a device') }}
										</a>
									</template> -->
								</div>
								<div v-else-if="!loading && passwordlessLogin"
									key="reset"
									class="login-additional login-passwordless">
									<PasswordLessLoginForm :username.sync="user"
										:redirect-url="redirectUrl"
										:auto-complete-allowed="autoCompleteAllowed"
										:is-https="isHttps"
										:is-localhost="isLocalhost"
										:has-public-key-credential="hasPublicKeyCredential"
										@submit="loading = true" />
									<NcButton type="tertiary"
										:aria-label="t('core', 'Back to login form')"
										:wide="true"
										@click="passwordlessLogin = false">
										{{ t('core', 'Back') }}
									</NcButton>
								</div>
								<div v-else-if="!loading && canResetPassword"
									key="reset"
									class="login-additional">
									<div class="lost-password-container">
										<ResetPassword v-if="resetPassword"
											:username.sync="user"
											:reset-password-link="resetPasswordLink"
											@abort="resetPassword = false" />
									</div>
								</div>
								<div v-else-if="resetPasswordTarget !== ''">
									<UpdatePassword :username.sync="user"
										:reset-password-target="resetPasswordTarget"
										@done="passwordResetFinished" />
								</div>
							</transition>
						</template>
						<template v-else>
							<transition name="fade" mode="out-in">
								<NcNoteCard type="warning" :title="t('core', 'Login form is disabled.')">
									{{ t('core', 'Please contact your administrator.') }}
								</NcNoteCard>
							</transition>
						</template>

						<!-- <div id="alternative-logins" class="alternative-logins">
							<NcButton v-for="(alternativeLogin, index) in alternativeLogins"
								:key="index"
								type="secondary"
								:wide="true"
								:class="[alternativeLogin.class]"
								role="link"
								:href="alternativeLogin.href">
								{{ alternativeLogin.name }}
							</NcButton>
						</div> -->
					</div>
				</div>
			</div>
			<div class="login-footer">
				<div>Bản quyền © 2024 thuộc Trung tâm Thông tin</div>
				<div>Bộ Thông tin và Truyền thông</div>
			</div>
			<div class="login-core-icon" @click="toggleLoginSSO">
				<span title="Đăng nhập bằng Acc nội bộ"></span>
			</div>
		</div>
	</div>	
</template>

<script>
import { loadState } from '@nextcloud/initial-state'
import queryString from 'query-string'

import LoginForm from '../components/login/LoginForm.vue'
import PasswordLessLoginForm from '../components/login/PasswordLessLoginForm.vue'
import ResetPassword from '../components/login/ResetPassword.vue'
import UpdatePassword from '../components/login/UpdatePassword.vue'
import NcButton from '@nextcloud/vue/dist/Components/NcButton.js'
import NcNoteCard from '@nextcloud/vue/dist/Components/NcNoteCard.js'

const query = queryString.parse(location.search)
if (query.clear === '1') {
	try {
		window.localStorage.clear()
		window.sessionStorage.clear()
		console.debug('Browser storage cleared')
	} catch (e) {
		console.error('Could not clear browser storage', e)
	}
}

export default {
	name: 'Login',

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
			user: loadState('core', 'loginUsername', ''),
			passwordlessLogin: false,
			resetPassword: false,
			isLoginSSO: query.direct === '1' && query.user !== '' ? false : true,

			// Initial data
			errors: loadState('core', 'loginErrors', []),
			messages: loadState('core', 'loginMessages', []),
			redirectUrl: loadState('core', 'loginRedirectUrl', false),
			throttleDelay: loadState('core', 'loginThrottleDelay', 0),
			canResetPassword: loadState('core', 'loginCanResetPassword', false),
			resetPasswordLink: loadState('core', 'loginResetPasswordLink', ''),
			autoCompleteAllowed: loadState('core', 'loginAutocomplete', true),
			resetPasswordTarget: loadState('core', 'resetPasswordTarget', ''),
			resetPasswordUser: loadState('core', 'resetPasswordUser', ''),
			directLogin: query.direct === '1',
			hasPasswordless: loadState('core', 'webauthn-available', false),
			countAlternativeLogins: loadState('core', 'countAlternativeLogins', false),
			alternativeLogins: loadState('core', 'alternativeLogins', []),
			isHttps: window.location.protocol === 'https:',
			isLocalhost: window.location.hostname === 'localhost',
			hasPublicKeyCredential: typeof (window.PublicKeyCredential) !== 'undefined',
			hideLoginForm: loadState('core', 'hideLoginForm', false),
		}
	},

	methods: {
		passwordResetFinished() {
			this.resetPasswordTarget = ''
			this.directLogin = true
		},
		toggleLoginSSO() {
			this.isLoginSSO = !this.isLoginSSO
		},
	},
}
</script>

<style lang="scss">
body {
	font-size: var(--default-font-size);
}

.login-box {
	// Same size as dashboard panels
	width: 320px;
	box-sizing: border-box;

	&__link {
		display: block;
		padding: 1rem;
		font-size: var(--default-font-size);
		text-align: center;
		font-weight: normal !important;
	}
}

.wrapper {
	.v-align {
		#header {
			display: none;
		}
	}
	max-width: 100%;
	height: 100%;
	margin-block: 0;
}

footer.guest-box {
	display: none;
}

.login-wrapper {
	display: flex;
	height: 100vh;
	.login-left {
		width: 50%;
		background-image: url(../../../core/img/logo/bg-cloud.jpg);
		background-size: cover;
		background-position: center;
	}
	.login-right {
		display: flex;
    	flex-direction: column;
		justify-content: space-between;
		background-color: #fff;
		width: 50%;		
		background-image: url(../../../core/img/logo/login_right.png);
		background-size: cover;
		// background-position: center;
		.login-sso {
			display: flex;
    		justify-content: center;
			.sso-wrapper {
				display: flex;
				flex-direction: column;
				.sso-logo {
					width: 350px;
					height: 300px;
					background-image: url(../../../core/img/logo/logo-btttt.png);
					background-size: contain;
					background-position: bottom;
					background-repeat: no-repeat;
				}
				.sso-title {
					background-image: url(../../../core/img/logo/mic_cloud_2.png);
					background-size: contain;
					background-position: center;
					background-repeat: no-repeat;
					width: 100%;
					height: 80px;
					// font-weight: 500;
    				// font-size: 48px;
    				// font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
    				// color: #1669B3;
				}
				.sso-button {
					cursor: pointer;
					height: 45px;
					border-radius: 5px;
    				background: linear-gradient(90deg, #6782df, #29b8e9);
    				box-shadow: 0 4px 40px rgba(0,0,0,.05);
					line-height: 45px;
    				font-size: 18px;
    				color: #fff;
					margin-top: 5px;
					&:hover {
						text-decoration: none !important;
					}
				}
				.login-core {
					max-width: 350px;
					.login-form__headline {
						display: none;
					}
					.login-box__link {
						display: none;
					}
				}
			}
		}
		.login-footer {
			display: flex;
			flex-direction: column;
			margin-bottom: 10px;
			color: #1485CB;
		}
		.login-core-icon {
			display: flex;
			justify-content: center;
			position: absolute;
			right: 0;
			bottom: 20%;
			width: 40px;
    		height: 40px;
    		// border-color: #1485CB;
			background-color: aliceblue;
    		border-radius: 10px 0 0 10px;
			span {
				width: 25px;
				background-image: url(../../../core/img/logo/login-core.svg);
				background-position: center;
				background-size: contain;
				background-repeat: no-repeat;
				cursor: pointer;
			}
		}
	}
}

@media screen and (max-width: 900px) {
	.login-wrapper {
		.login-left {
			display: none;
		}
		.login-right {
			width: 100%;
		}
	}
}

.fade-enter-active, .fade-leave-active {
	transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
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
</style>
