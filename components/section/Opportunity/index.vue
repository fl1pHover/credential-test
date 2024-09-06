<script setup lang="ts">
const opportunities = [
    {
        title: "Бараагаа онцлох",
        image: "/images/opportunity/op-1.png",
        description:
            "Та нийт 22 өнгөөс сонгон бараагаа бусад бараанаас онцолж харуулах боломжтой.",
    },
    {
        title: "Бараагаа хямдруулах",
        image: "/images/opportunity/op-2.png",
        description:
            "Та бараагаа хүссэн үедээ хүссэн дүнгээрээ хямдруулах боломжтой.",
    },
    {
        title: "Сонголт оруулах",
        image: "/images/opportunity/op-3.png",
        description: "Та бараандаа хязгааргүй сонголтууд оруулах боломжтой.",
    },
    {
        title: "Үлдэгдлээ хянах",
        image: "/images/opportunity/op-4.png",
        description:
            "Та барааны үлдэгдлээ хянаж, бүртгэж, дууссан тохиолдолд захиалга нэмж авахгүйгээр тохируулах боломжтой.",
    },
    {
        title: "Төлбөрийн систем нэмэх",
        image: "/images/opportunity/op-5.png",
        description:
            "Та дэлгүүртээ бүх төрлийн төлбөрийн системийг үнэгүй холбуулан ашиглах боломжтой.",
    },
    {
        title: "Хүргэлтийн систем ашиглах",
        image: "/images/opportunity/op-6.png",
        description:
            "Танд хүргэлтийн шийдэл хэрэгтэй бол манай хамтрагч байгууллагын системийг ашиглах боломжтой.",
    },
];
</script>

<template>
    <div className="my-12 bg-white" id="opportunity">
        <div
            class="relative max-w-screen-xl px-4 py-8 mx-auto text-center sm:py-16 lg:px-6"
        >
            <h2 className="text-xl font-semibold leading-7 text-pri">
                Боломжууд
                <span className="w-full h-1 mt-1 sec"></span>
            </h2>
            <h2 className="max-w-2xl mx-auto my-6 text-4xl font-bold text-pri">
                Худалдаа хийхэд хэрэгтэй
                <span className="text-sec">бүх хэрэгслүүд</span>
            </h2>
            <p className="max-w-3xl mx-auto text-slate-500 sm:text-2xl">
                Та өөрийн вебсайтыг бүрэн удирдаж, хэрэглэгчиддээ илүү тухтай
                үйлчилгээг үзүүлээрэй.
            </p>
            <div
                className="mt-12 space-y-8 lg:mt-16 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0"
            >
                <div v-for="(item, index) in opportunities" :key="index">
                    <div key="{index}" className="">
                        <!-- <div className="flex items-center justify-center mb-8">
                            <img
                                src="/ima ges/opportunity/op-5.png"
                                className="rounded-lg"
                                alt=""
                            />
                        </div> -->
                        <h3 className="px-6 mb-2 text-lg font-bold text-pri">
                            {{ item.title }}
                        </h3>
                        <p className="px-6 text-lg text-slate-500">
                            {{ item.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
