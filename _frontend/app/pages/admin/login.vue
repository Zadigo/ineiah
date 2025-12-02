<template>
  <div class="flex flex-col gap-6">
    <volt-card class="overflow-hidden">
      <template #content>
        <div class="grid p-0 md:grid-cols-2">
          <form class="p-6 md:p-8">
            <div class="flex flex-col gap-6">
              <div class="flex flex-col items-center text-center">
                <h1 class="text-2xl font-bold">
                  Welcome back
                </h1>
                <p class="text-balance text-muted-foreground">
                  Login to your Acme Inc account
                </p>
              </div>

              <div class="grid gap-2">
                <ShadLabel for="email">Email</ShadLabel>
                <volt-input-text id="email" type="email" placeholder="m@example.com" required />
              </div>

              <div class="grid gap-2">
                <div class="flex items-center">
                  <ShadLabel for="password">Password</ShadLabel>
                  <a href="#" class="ml-auto text-sm underline-offset-2 hover:underline">
                    Forgot your password?
                  </a>
                </div>
                <volt-input-text id="password" type="password" required />
              </div>

              <volt-button type="submit" class="w-full" rounded>
                Login
              </volt-button>

              <div class="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                <span class="relative z-10 bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
              <div class="text-center text-sm">
                Don't have an account?
                <a href="#" class="underline underline-offset-4">
                  Sign up
                </a>
              </div>
            </div>
          </form>
        </div>

        <div class="relative hidden bg-muted md:block">
          <img src="/placeholder.svg" alt="Image" class="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale">
        </div>
      </template>
    </volt-card>
  </div>
</template>

<script setup lang="ts">
</script>
