<template>
  <ShadSidebarProvider>
    <AdminAppSidebar />

    <ShadSidebarInset>
      <!-- Header -->
      <header class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div class="flex items-center gap-2 px-4">
          <ShadSidebarTrigger class="-ml-1" />

          <ShadSeparator orientation="vertical" class="mr-2 h-4" />

          <ShadBreadcrumb>
            <ShadBreadcrumbList>
              <ShadBreadcrumbItem class="hidden md:block">
                <ShadBreadcrumbLink href="#">
                  Building Your Application
                </ShadBreadcrumbLink>
              </ShadBreadcrumbItem>

              <ShadBreadcrumbSeparator class="hidden md:block" />

              <ShadBreadcrumbItem>
                <ShadBreadcrumbPage>Data Fetching</ShadBreadcrumbPage>
              </ShadBreadcrumbItem>
            </ShadBreadcrumbList>
          </ShadBreadcrumb>
        </div>
      </header>

      <!-- Content -->
      <slot />
    </ShadSidebarInset>
  </ShadSidebarProvider>
</template>
