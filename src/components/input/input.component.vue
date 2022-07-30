<script setup lang="ts">
import ApproveIcon from '@/assets/icons/approve-icon.vue';
// defineProps<{
//   label: string,
//   showApprove: { type: boolean, default: false },
// }>();

interface Props {
  label: string,
  showApprove: boolean
}

defineProps<Props>()
</script>

<template>
  <div class="c-input">
    <label class="c-input__label">{{ label }}
      <div class="c-input__input-wrapper">
        <input v-bind="$attrs"
               class="c-input__input">
        <approve-icon v-if="showApprove" />
      </div>
    </label>
  </div>
</template>

<style lang="scss" scoped>
.c-input {

  &__label {
    display: flex;
    flex-direction: column;
    font-size: 1.6rem;
    color: var(--grey-700);
  }

  &__input-wrapper {
    margin-top: .5rem;
    background-color: var(--grey-200);
    height: 3rem;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:focus {
      outline: .2rem solid var(--grey-700);
    }
  }

  &__input {
    border: none;
    background-color: var(--grey-200);

    &:focus-visible {
      outline: none;
    }
  }
}

</style>