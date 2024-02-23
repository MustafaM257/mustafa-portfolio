<template>
  <div class="lg:order-first lg:row-span-2">
    <h1 class="text-3xl font-bold tracking-wide sm:text-5xl">
      Don't hesitate to contact me! Anytime you want.
    </h1>
    <div class="mt-6 text-base space-y-7">
      <div class="hidden mt-5 lg:block">
        <svg
          width="315px"
          height="107px"
          viewBox="0 0 315 107"
          version="1.1"
          style="overflow: visible"
        >
          <g
            id="Page-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
            sketch:type="MSPage"
          >
            <!-- Updated Path Color to Blue -->
            <path
              id="Path-1"
              class="path"
              fill="none"
              stroke="#3B82F6"
              stroke-width="5"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              d="M1.4,105.9c0,0,86,-57,211.5,-41.5s172.5,24.5,289,-81"
            />

            <path
              class="dashed"
              fill="none"
              stroke="#00000"
              stroke-width="8"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              d="M1.4,105.9c0,0,86,-57,211.5,-41.5s172.5,24.5,289,-81"
            />

            <!-- Updated Arrow Fill to Blue -->
            <polyline id="arrow" points="0,-9 18,0 0,9 5,0" fill="#3B82F6">
              <animateMotion
                rotate="auto"
                begin="1s"
                dur="1.6s"
                repeatCount="1"
                fill="freeze"
              >
                <mpath xlink:href="#Path-1" />
              </animateMotion>
            </polyline>
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>
<style scoped>
.path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: dash 3s linear infinite;
  animation-delay: 1s;
}
@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}
.dashed {
  stroke-dasharray: 5, 12;
}
#arrow {
  animation: arrow 2s linear infinite;
  opacity: 0;
}
@keyframes arrow {
  to {
    opacity: 1;
  }
}
.ifrm {
  border: none;
  width: 100%;
  margin-top: 50px;
}
</style>
