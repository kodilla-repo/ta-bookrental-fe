<template>
  <div>
    <label class="input-field">

      <!-- input -->
      <input
        ref="input"
        :id="id"
        :name="name"
        v-model="newValue"
        :type="type"
        class="input-field__input"
        @input="$emit('input', prepareVal(newValue))"
        @blur="$emit('blur', prepareVal(newValue))"
        @focus="$emit('focus', prepareVal(newValue))">

      <!-- label -->
      <span :class="{ 'input-field__label': true, 'input-field__label--active': newValue.length }" v-text="label" />

    </label>
  </div>
</template>

<script>
export default {
  name: 'inputField',
  props: {
    value: [String, Number],
    type: String,
    label: String,
    name: String,
    id: String
  },
  data: () => {
    return {
      newValue: null
    }
  },
  methods: {
    prepareVal () {
      return this.type === 'number' ? parseInt(this.newValue) : this.newValue
    }
  },
  created () {
    this.newValue = (this.type === 'number' && !isNaN(this.value)) ? this.value.toString() : this.value
  }
}
</script>

<style lang="scss">
@import '@/assets/sass/_variables.scss';

.input-field {
  display: block;
  position: relative;
  transition: .2s;
  width: 100%;
  max-width: 20rem;
  //box-shadow: 0 0 10px rgba(196,219,244,.5);
  border-bottom: 1px solid #c4dbf4;
  margin: 1rem 0;

  &:hover {
    margin-left: -0.2rem;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active  {
    -webkit-box-shadow: none;
  }

  &__input {
    background: none;
    border: none;
    outline: none;
    padding: 0.7rem 0.7rem 0 0.7rem;
    color: $base-font-color;
    font-weight: lighter;
    font-family: inherit;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    margin: 0.5rem 0;
    opacity: 0.8;
    width: 100%;
    max-width: 20rem;
    transition: .2s;
    font-size: 1rem;

    &:focus {
      opacity: 1;
      background: none;
    }

    &[type="number"] {
      max-width: 10rem;
    }

    &[type="time"] {
      max-width: 10rem;
    }
  }

  &__label {
    position: absolute;
    top: 1.2rem;
    left: 0.7rem;
    opacity: 0.6;
    font-weight: lighter;
    transition: .1s;

    &.input-field__label--active {
      font-size: 0.8rem;
      top: -0.2rem;
      left: 0.7rem;
    }

  }

}
</style>
