import React from "react";

export default function TabsSwiper() {
  return (
    <Box pl={"30px"}>
      <Tabs>
        <TabList gap={3}>
          <Swiper spaceBetween={10} slidesPerView={2.5}>
            <SwiperSlide>
              <Tab
                bg={"#fff"}
                p={"8px 12px"}
                borderRadius={"15px"}
                border={"2px solid #9B9B9B"}
                color={"#9B9B9B"}
                _selected={{ color: "#fff", bg: "#000", border: "none" }}
              >
                Cadenas
              </Tab>
            </SwiperSlide>

            <SwiperSlide>
              <Tab
                bg={"#fff"}
                borderRadius={"15px"}
                border={"2px solid #9B9B9B"}
                color={"#9B9B9B"}
                _selected={{ color: "#fff", bg: "#000", border: "none" }}
              >
                Collares
              </Tab>
            </SwiperSlide>

            <SwiperSlide>
              <Tab
                bg={"#fff"}
                borderRadius={"15px"}
                border={"2px solid #9B9B9B"}
                color={"#9B9B9B"}
                _selected={{ color: "#fff", bg: "#000", border: "none" }}
              >
                Pulseras
              </Tab>
            </SwiperSlide>
          </Swiper>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
