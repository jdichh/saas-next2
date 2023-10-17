import * as ZOD from "zod";

export const formSchema = ZOD.object({
    prompt: ZOD.string().min(1, {
        message: "You can't just say nothing!"
    })
})
