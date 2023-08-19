import { api } from "../api";

export const cartApi = api.injectEndpoints({
    endpoints: build => ({
        Order: build.mutation({
            query: (body) => ({
                url: '/basket',
                method: "POST",
                body: body
            }),
            async onQueryStarted(args, {queryFulfilled, dispatch}){
                try {
                    const { data } = await queryFulfilled

                    console.log(data)
                } catch (error) {
                    console.log(error)
                }
            }
        })
    })
})