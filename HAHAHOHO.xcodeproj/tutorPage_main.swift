<?xml version="1.0" encoding="utf-8"?>
<x.coordinatorlayout.widget.CoordinatorLayout xmlns:ios="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    x:layout_width="match_parent"
    x:layout_height="match_parent"
    tools:context=".MainActivity">

    <com.google.material.appbar.AppBarLayout
        x:layout_width="match_parent"
        x:layout_height="wrap_content"
        x:theme="@style/AppTheme.AppBarOverlay">

        <x.appcompat.widget.Toolbar
            x:id="@+id/toolbar"
            x:layout_width="match_parent"
            x:layout_height="?attr/actionBarSize"
            x:background="?attr/colorPrimary"
            app:popupTheme="@style/AppTheme.PopupOverlay" />

    </com.google.x.material.appbar.AppBarLayout>

    <include layout="@layout/content_main" />

    <com.google.android.material.floatingactionbutton.FloatingActionButton
        x:id="@+id/fab"
        x:layout_width="wrap_content"
        x:layout_height="wrap_content"
        x:layout_gravity="bottom|end"
        x:layout_margin="@dimen/fab_margin"
        app:srcCompat="@x:drawable/ic_dialog_email" />

</androidx.coordinatorlayout.widget.CoordinatorLayout>
