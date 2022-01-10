<script setup lang="ts">
import { useUserStore } from '~/stores/user'

const user = useUserStore()
const name = ref(user.savedName)

const router = useRouter()
const go = () => {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}

const { t } = useI18n()
</script>

<template>
  <div class="wi-content flex flex-col items-center pt-8 gap-4">
    <assets-logo-vuwi-pig class="h-48 w-48" />
    <p>
      <em class="text-sm opacity-75">{{ t('intro.desc') }}</em>
    </p>

    <VTextInput
      v-model="name"
      :placeholder="t('intro.whats-your-name')"
      class="border wi-border tf-center font-bold"
      @keydown.enter="go"
    />

    <VButton :disabled="!name" class="wi-success" @click="go">
      {{ t('button.go') }}
    </VButton>
  </div>
</template>

<style>
.tf-center input {
  text-align: center;
  font-weight: bold;
}
</style>

<route lang="yaml">
meta:
  layout: home
</route>
