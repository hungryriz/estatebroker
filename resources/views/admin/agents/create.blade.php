@extends('layouts.app')
@include('admin.sidebar')
@section('content')
<div class="container">
    @include('flash-message')
    <div class="row justify-content-center">
        <div class="col-md-2 col-sm-12">
            <div class="card">
                <div class="card-header">Navigation</div>
                <div class="card-body">
                    @yield('sidebar')
                </div>
            </div>
        </div>
        <div class="col-md-10 col-sm-12">
            <div class="card-box table-responsive">
                <form role="form" method="POST" action="{{route('agents.store')}}" enctype="multipart/form-data">
                    @csrf

                    <h4 class="m-t-0 header-title">
                        <b>{{__('New Agent')}}</b>
                    </h4>

                    <div class="row">
                        <div class="col-md-6 col-sm-12">
                            <div class="form-group">
                                <label for="name">{{__('Name')}}</label>
                                <input id="name" type="text" class="form-control" name="name">
                                @error('name')
                                    <div class="alert alert-danger">{{ $message }}</div>
                                @enderror
                            </div>

                            <div class="form-group">
                                <label for="phone">{{__('Phone')}}</label>
                                <input id="phone" type="text" class="form-control" name="phone">
                                @error('phone')
                                    <div class="alert alert-danger">{{ $message }}</div>
                                @enderror
                            </div>

                            <div class="form-group">
                                <label for="mobile_phone">{{__('Mobile Phone')}}</label>
                                <input id="mobile_phone" type="text" class="form-control" name="mobile_phone">
                            </div>

                            <div class="form-group">
                                <label for="path">{{__('Path')}}</label>
                                <input id="path" type="file" class="form-control" name="path">
                            </div>
                        </div>

                        <div class="col-md-6 col-sm-12">
                            <div class="form-group">
                                <label for="city">{{__('City')}}</label>
                                <input id="city" type="text" class="form-control" name="city">
                            </div>

                            <div class="form-group">
                                <label for="state">{{__('State')}}</label>
                                <input id="state" type="text" class="form-control" name="state">
                            </div>

                            <div class="form-group">
                                <label for="country">{{__('Country')}}</label>
                                <input id="country" type="text" class="form-control" name="country">

                            </div>

                            <div class="form-group">
                                <label for="country">{{__('Address')}}</label>
                                <input id="address" type="text" class="form-control" name="address">

                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="form-group">
                            <button id="submit" type="submit" class="btn btn-primary btn-lg">{{__('Add Agent')}}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection
