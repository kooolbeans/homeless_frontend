import { defineComponent, KeepAlive } from 'vue';
import { RouterView } from 'vue-router';

import Header from '@/components/Header.vue'

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <div class="main">
        <Header />
        <main class="content">
          <b-container fluid class="p-0">
            <b-row class="mb-2 mb-xl-3">
              <b-col>
                <RouterView>
                  {
                    // @ts-ignore
                    ({ Component, route }) => {
                      const { meta } = route;
                      const isKeepAlive = meta && meta.keepAlive;
                      return (
                        <>
                          <KeepAlive>
                            {isKeepAlive ? (
                              <Component
                                key={meta.usePathKey ? route.fullPath : undefined}
                              />
                            ) : null}
                          </KeepAlive>
                          {!isKeepAlive ? (
                            <Component
                              key={meta.usePathKey ? route.fullPath : undefined}
                            />
                          ) : null}
                        </>
                      );
                    }
                  }
                </RouterView>
              </b-col>
            </b-row>
          </b-container>
        </main>
      </div>
    );
  }
});