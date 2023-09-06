<template>
  <div class="min-h-full">
    <Disclosure v-slot="{ open }" as="nav">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img class="h-8" src="/logo.svg" alt="Patchstack" />
            </div>

            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <NuxtLink
                  to="/"
                  :class="[
                    route.path === '/'
                      ? 'bg-white text-gray-700'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'rounded-md px-3 py-2 text-sm font-medium',
                  ]"
                >
                  Home
                </NuxtLink>

                <NuxtLink
                  v-if="auth.isLoggedIn"
                  to="/vulnerabilities"
                  :class="[
                    route.path === '/vulnerabilities'
                      ? 'bg-white text-gray-700'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'rounded-md px-3 py-2 text-sm font-medium',
                  ]"
                >
                  Vulnerabilities
                </NuxtLink>
              </div>
            </div>
          </div>

          <div v-if="auth.isLoggedIn" class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6">
              <div class="relative p-2 text-gray-400">
                <span>{{ auth.user.name }}</span>
              </div>

              <!-- Profile dropdown -->
              <Menu as="div" class="relative ml-3">
                <MenuButton
                  class="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span class="absolute -inset-1.5" />

                  <span class="sr-only">Open user menu</span>

                  <UserCircleIcon class="h-8 w-8 rounded-full" />
                </MenuButton>

                <transition
                  enter-active-class="transition ease-out duration-100"
                  enter-from-class="transform opacity-0 scale-95"
                  enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75"
                  leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95"
                >
                  <MenuItems
                    class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <MenuItem as="div">
                      <NuxtLink
                        to="/me"
                        class="block px-4 py-2 text-sm text-gray-700"
                      >
                        My Profile
                      </NuxtLink>

                      <button
                        class="w-full text-left block px-4 py-2 text-sm text-gray-700"
                        @click="handleLogout"
                      >
                        Logout
                      </button>
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
          </div>

          <div v-else class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6">
              <div class="ml-10 flex items-baseline space-x-4">
                <NuxtLink
                  to="/login"
                  :class="[
                    route.path === '/login'
                      ? 'bg-white text-gray-700'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'rounded-md px-3 py-2 text-sm font-medium',
                  ]"
                >
                  Login
                </NuxtLink>

                <NuxtLink
                  to="/register"
                  :class="[
                    route.path === '/register'
                      ? 'bg-white text-gray-700'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'rounded-md px-3 py-2 text-sm font-medium',
                  ]"
                >
                  Register
                </NuxtLink>
              </div>
            </div>
          </div>

          <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton
              class="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span class="absolute -inset-0.5" />

              <span class="sr-only">Open main menu</span>

              <Bars3Icon
                v-if="!open"
                class="block h-6 w-6"
                aria-hidden="true"
              />

              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel class="md:hidden">
        <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          <DisclosureButton
            :as="NuxtLink"
            to="/"
            :class="[
              route.path === '/'
                ? 'bg-white text-gray-700'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              'block rounded-md px-3 py-2 text-base font-medium',
            ]"
          >
            Home
          </DisclosureButton>

          <DisclosureButton
            v-if="auth.isLoggedIn"
            :as="NuxtLink"
            to="/vulnerabilities"
            :class="[
              route.path === '/vulnerabilities'
                ? 'bg-white text-gray-700'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              'block rounded-md px-3 py-2 text-base font-medium',
            ]"
          >
            Vulnerabilities
          </DisclosureButton>
        </div>

        <div v-if="auth.isLoggedIn" class="border-t border-gray-700 pb-3 pt-4">
          <div class="flex items-center px-5">
            <div class="flex-shrink-0">
              <UserCircleIcon class="h-10 w-10 rounded-full" />
            </div>

            <div class="ml-3">
              <div class="text-base font-medium text-white">
                {{ auth.user.name }}
              </div>

              <div class="text-sm font-medium text-gray-400">
                {{ auth.user.email }}
              </div>
            </div>
          </div>

          <div class="mt-3 space-y-1 px-2">
            <DisclosureButton
              :as="NuxtLink"
              to="/me"
              class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              My Profile
            </DisclosureButton>

            <DisclosureButton
              as="button"
              class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
              @click="handleLogout"
            >
              Logout
            </DisclosureButton>
          </div>
        </div>

        <div v-else class="border-t border-gray-700 pb-3 pt-3">
          <div class="space-y-1 px-2">
            <DisclosureButton
              :as="NuxtLink"
              to="/login"
              class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              Login
            </DisclosureButton>

            <DisclosureButton
              :as="NuxtLink"
              to="/register"
              class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              Register
            </DisclosureButton>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>

    <main>
      <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <slot />

        <ModalsContainer />
      </div>
    </main>
  </div>
</template>

<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import {
  Bars3Icon,
  XMarkIcon,
  UserCircleIcon,
} from "@heroicons/vue/24/outline";
import { ModalsContainer } from "vue-final-modal";
import { useAuthStore } from "~/stores/useAuthStore";
import NuxtLink from "#app/components/nuxt-link";

const auth = useAuthStore();
const route = useRoute();

const handleLogout = async () => {
  await auth.logout();
};

useHead({
  htmlAttrs: {
    class: "h-full bg-[#17191e]",
  },
  bodyAttrs: {
    class: "h-full",
  },
  title: "Patchstack",
});
</script>
