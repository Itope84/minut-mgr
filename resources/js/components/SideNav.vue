<template>
  <nav class="navbar navbar-expand-sm navbar-default">
    <div class="navbar-header">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#main-menu"
        aria-controls="main-menu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
      <a class="navbar-brand my-2 py-2" href="/">
        <img src="/images/logo.png" alt="Logo">
      </a>
      <a class="navbar-brand hidden" href="/">
        <img src="/images/logo-icon.png" alt="Logo">
      </a>
    </div>

    <div id="main-menu" class="main-menu collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <li class="active">
          <a href="/home">
            <i class="menu-icon fas fa-tachometer-alt"></i>Dashboard
          </a>
        </li>
        <h3 class="menu-title">Companies</h3>
        <!-- /.menu-title -->
        <li class="">
          <a
            href="/super/employers"
          >
            <i class="menu-icon fa fa-laptop"></i>Employer and Companies
          </a>
        </li>

        <li class="">
          <a
            href="#"
          >
            <i class="menu-icon fa fa-laptop"> </i>New Employer
          </a>
        </li>

        <h3 class="menu-title">Jobs</h3>
        <!-- /.menu-title -->
        <li class="">
          <a
            href="/super/jobs"
            class="dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="menu-icon fa fa-tasks"></i>All Jobs
          </a>
        </li>
        <li>
          <a href="">
            <i class="menu-icon ti-email"></i>Add New
          </a>
        </li>

        <h3 class="menu-title">Applications</h3>
        <!-- /.menu-title -->
        <li class="">
          <a
            href="#"
            class="dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="menu-icon fa fa-glass"></i>View All
          </a>
        </li>
      </ul>
    </div>
    <!-- /.navbar-collapse -->
  </nav>
</template>
