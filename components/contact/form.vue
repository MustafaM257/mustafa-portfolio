<template>
  <form
    action="#"
    method="POST"
    class="grid max-w-lg grid-cols-1 mx-auto gap-y-6 lg:max-w-none"
  >
    <div>
      <label for="full-name" class="sr-only">Full name</label>
      <input
        type="text"
        name="full-name"
        id="full-name"
        autocomplete="name"
        class="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 shadow-sm rounded-2xl focus:border-blue-500 focus:ring-blue-500"
        placeholder="Full name"
      />
    </div>
    <div>
      <label for="email" class="sr-only">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        required
        autocomplete="email"
        class="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 shadow-sm rounded-2xl focus:border-blue-500 focus:ring-blue-500"
        placeholder="Email"
      />
    </div>
    <div>
      <label for="phone" class="sr-only">Phone</label>
      <input
        type="text"
        name="phone"
        id="phone"
        autocomplete="tel"
        class="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 shadow-sm rounded-2xl focus:border-blue-500 focus:ring-blue-500"
        placeholder="Phone"
      />
    </div>
    <div>
      <label for="message" class="sr-only">Message</label>
      <textarea
        id="message"
        name="message"
        rows="4"
        class="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 shadow-sm rounded-2xl focus:border-blue-500 focus:ring-blue-500"
        placeholder="Message"
      />
    </div>
    <div>
      <button
        type="submit"
        class="inline-flex justify-center px-6 py-3 text-base font-medium text-white bg-blue-500 border border-transparent shadow-sm rounded-2xl hover:bg-white-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Submit
      </button>
    </div>
  </form>
</template>
